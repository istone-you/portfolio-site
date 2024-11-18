import MagazineModeToggle from "../viewModeContents/MagazineModeToggle";
import MagazineModeContents from "../viewModeContents/MagazineModeContents";

import type { mangaList, magazineList } from "@/types/manga";

import useMagazineModeView from "@/hooks/useMagazineModeView";

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
    useMagazineModeView(false);

  return (
    <div className="container mx-auto">
      <MagazineModeToggle checked={filterSerialized} onChange={handleToggle} />
      {magazineList
        .filter(
          (magazine) =>
            !magazineList.some(
              (m) => m.specialNumber && m.specialNumber.id === magazine.id
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

          const specialMagazine =
            magazine.specialNumber &&
            magazineList.find(
              (special) => special.id === magazine.specialNumber.id
            );

          return (
            filteredMangas.length > 0 && (
              <div
                key={magazine.id}
                className="w-full mb-4 py-8 content-card max-w-3xl px-10"
              >
                <MagazineModeContents
                  key={magazine.id}
                  magazine={magazine}
                  mangas={filteredMangas}
                  visible={visible}
                  isTransparent={isReloading}
                />
                {specialMagazine && (
                  <div className="mt-4">
                    <MagazineModeContents
                      key={`${specialMagazine.id}-duplicate`}
                      magazine={specialMagazine}
                      mangas={mangaList.filter((manga) => {
                        const currentMagazine =
                          filterSerialized && manga.is_transferred
                            ? manga.is_transferred
                            : manga.magazine;

                        return (
                          currentMagazine?.id === specialMagazine.id &&
                          (!filterSerialized || manga.is_serialized)
                        );
                      })}
                      visible={visible}
                      isTransparent={isReloading}
                    />
                  </div>
                )}
              </div>
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
          <div className="w-full mb-4 py-8 content-card max-w-3xl px-10">
            <MagazineModeContents
              key="others"
              magazine={null}
              mangas={otherMangas}
              visible={visible}
              isTransparent={isReloading}
            />
          </div>
        );
      })()}
    </div>
  );
};

export default MagazineMode;
