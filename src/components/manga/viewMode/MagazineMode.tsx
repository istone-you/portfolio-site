import MagazineModeContents from "../viewModeContents/MagazineModeContents";

import type { mangaList, magazineList } from "@/types/manga";

const MagazineMode = ({
  mangaList,
  visible,
  magazineList,
}: {
  mangaList: mangaList;
  visible: boolean;
  magazineList: magazineList;
}) => {
  return (
    <div className="container mx-auto">
      {magazineList
        .filter(
          (magazine) =>
            !magazineList.some(
              (m) => m.specialNumber && m.specialNumber.id === magazine.id
            )
        )
        .map((magazine) => {
          const filteredMangas = mangaList.filter(
            (manga) => manga.magazine?.id === magazine.id
          );
          const specialMagazine =
            magazine.specialNumber &&
            magazineList.find(
              (special) => special.id === magazine.specialNumber.id
            );
          return (
            <div
              key={magazine.id}
              className="w-full mb-4 py-8 content-card max-w-3xl px-10"
            >
              <MagazineModeContents
                key={magazine.id}
                magazine={magazine}
                mangas={filteredMangas}
                visible={visible}
              />
              {specialMagazine && (
                <div className="mt-4">
                  <MagazineModeContents
                    key={`${specialMagazine.id}-duplicate`}
                    magazine={specialMagazine}
                    mangas={mangaList.filter(
                      (manga) => manga.magazine?.id === specialMagazine.id
                    )}
                    visible={visible}
                  />
                </div>
              )}
            </div>
          );
        })}

      {(() => {
        const otherMangas = mangaList.filter(
          (manga) =>
            manga.id !== "single" &&
            !magazineList.some((magazine) =>
              manga.magazine?.id.includes(magazine.id)
            )
        );
        return (
          <div className="w-full mb-4 py-8 content-card max-w-3xl px-10">
            <MagazineModeContents
              key="others"
              magazine={null}
              mangas={otherMangas}
              visible={visible}
            />
          </div>
        );
      })()}
    </div>
  );
};

export default MagazineMode;
