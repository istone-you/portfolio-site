import ViewToggle from "../viewModeContents/ViewToggle";
import MagazineModeContents from "../viewModeContents/MagazineModeContents";

import type { mangaList, magazineList } from "@/types/manga";

import useSerializedSort from "@/hooks/useSerializedSort";

const MagazineMode = ({
  mangaList,
  visible,
  magazineList,
}: {
  mangaList: mangaList;
  visible: boolean;
  magazineList: magazineList;
}) => {
  const { filterSerialized, isReloading, handleToggle } =
    useSerializedSort(false);

  return (
    <div className="container mx-auto">
      <ViewToggle
        label="連載中のみ表示"
        checked={filterSerialized}
        onChange={handleToggle}
      />
      <p className="text-center text-sm text-gray-500">
        ※
        休刊した雑誌で連載していた作品は、移籍・合併後の雑誌にカテゴライズしています。
      </p>
      {magazineList
        .filter(
          (magazine) =>
            !magazineList.some((m) =>
              m.group?.some((group) => group.id === magazine.id)
            )
        )
        .map((magazine) => {
          const filteredMangas = mangaList.filter((manga) => {
            const currentMagazine =
              filterSerialized && manga.is_transferred
                ? manga.is_transferred
                : manga.magazine;

            const belongsToMagazine = currentMagazine?.id === magazine.id;
            const matchesSerialized = !filterSerialized || manga.is_serialized;

            return belongsToMagazine && matchesSerialized;
          });

          const groupMagazines =
            magazine.group?.map((group) =>
              magazineList.find((mag) => mag.id === group.id)
            ) || [];

          const groupMangas = groupMagazines
            .map((groupMagazine) => ({
              groupMagazine,
              mangas: mangaList.filter((manga) => {
                const currentMagazine =
                  filterSerialized && manga.is_transferred
                    ? manga.is_transferred
                    : manga.magazine;

                return (
                  currentMagazine?.id === groupMagazine?.id &&
                  (!filterSerialized || manga.is_serialized)
                );
              }),
            }))
            .filter(({ mangas }) => mangas.length > 0); // mangasが空のgroupを除外

          return (
            filteredMangas.length > 0 && (
              <>
                <div
                  key={magazine.id}
                  className="w-full mb-8 py-14 content-card max-w-3xl px-10"
                >
                  <MagazineModeContents
                    key={magazine.id}
                    magazine={magazine}
                    mangas={filteredMangas}
                    visible={visible}
                    isTransparent={isReloading}
                  />
                  {groupMangas.map(({ groupMagazine, mangas }) => (
                    <div key={`${groupMagazine?.id}-group`} className="mt-6">
                      <MagazineModeContents
                        magazine={groupMagazine || null}
                        mangas={mangas}
                        visible={visible}
                        isTransparent={isReloading}
                      />
                    </div>
                  ))}
                </div>
              </>
            )
          );
        })}

      {(() => {
        const otherMangas = mangaList.filter((manga) => {
          const currentMagazine =
            filterSerialized && manga.is_transferred
              ? manga.is_transferred
              : manga.magazine;

          const belongsToMagazine =
            manga.id !== "single" &&
            !magazineList.some((magazine) =>
              currentMagazine?.id.includes(magazine.id)
            );
          const matchesSerialized = !filterSerialized || manga.is_serialized;

          return belongsToMagazine && matchesSerialized;
        });
        return (
          <>
            <h3 className="text-center text-base font-semibold">その他</h3>
            <div className="w-full mb-4 py-8 content-card max-w-3xl px-10">
              <MagazineModeContents
                key="others"
                magazine={null}
                mangas={otherMangas}
                visible={visible}
                isTransparent={isReloading}
              />
            </div>
          </>
        );
      })()}
    </div>
  );
};

export default MagazineMode;
