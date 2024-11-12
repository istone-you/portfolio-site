import Image from "next/image";

import MangaCover from "./MangaCover";
import MagazineMangaList from "./MagazineMangaList";

import type { Manga, magazineList, Cover } from "@/types/manga";

const MangaListSection = ({
  viewMode,
  mangaList,
  visible,
  visibleCount,
  magazineList,
}: {
  viewMode: "series" | "all" | "serialized" | "magazine";
  mangaList: Array<any>;
  visible: boolean;
  visibleCount: number;
  magazineList: magazineList;
}) => {
  const serializedMangaList = mangaList.filter((manga) => manga.is_serialized);
  const nonSerializedMangaList = mangaList.filter(
    (manga) => !manga.is_serialized
  );

  return (
    <>
      {viewMode === "serialized" && (
        <>
          <h3 className="w-full text-center mt-4 mb-2 text-lg font-semibold">
            連載中（{serializedMangaList.length}作品）
          </h3>
          {serializedMangaList.map((manga) => (
            <MangaCover key={manga.id} manga={manga} visible={visible} />
          ))}
          <h3 className="w-full text-center mt-6 mb-2 text-lg font-semibold">
            完結済（{nonSerializedMangaList.length}作品）
          </h3>
          {nonSerializedMangaList.map((manga) => (
            <MangaCover key={manga.id} manga={manga} visible={visible} />
          ))}
        </>
      )}
      {viewMode === "magazine" && (
        <div className="container mx-auto">
          {magazineList
            .filter(
              (magazine) =>
                // 他のmagazineのspecialNumberとして参照されていないmagazineのみを残す
                !magazineList.some(
                  (m) => m.specialNumber && m.specialNumber.id === magazine.id
                )
            )
            .map((magazine) => {
              const filteredMangas = mangaList.filter(
                (manga: Manga) => manga.magazine?.id == magazine.id
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
                  <MagazineMangaList
                    key={magazine.id}
                    magazine={magazine}
                    mangas={filteredMangas}
                    visible={visible}
                  />
                  {specialMagazine && (
                    <div className="mt-4">
                      <MagazineMangaList
                        key={`${specialMagazine.id}-duplicate`}
                        magazine={specialMagazine}
                        mangas={mangaList.filter(
                          (manga: Manga) =>
                            manga.magazine?.id == specialMagazine.id
                        )}
                        visible={visible}
                      />
                    </div>
                  )}
                </div>
              );
            })}

          {/* その他の作品を表示 */}
          {(() => {
            const otherMangas = mangaList.filter(
              (manga: Manga) =>
                manga.id !== "single" &&
                !magazineList.some((magazine) =>
                  manga.magazine?.id.includes(magazine.id)
                )
            );

            return (
              <div className="w-full mb-4 py-8 content-card max-w-3xl px-10">
                <MagazineMangaList
                  key="others"
                  magazine={null}
                  mangas={otherMangas}
                  visible={visible}
                />
              </div>
            );
          })()}
        </div>
      )}
      {viewMode === "series" && (
        <>
          <h3 className="w-full text-center mt-4 mb-2 text-lg font-semibold">
            {mangaList.length}作品
          </h3>
          {mangaList.map((manga) => (
            <MangaCover key={manga.id} manga={manga} visible={visible} />
          ))}
        </>
      )}
      {viewMode === "all" && (
        <>
          <h3 className="w-full text-center mt-4 mb-2 text-lg font-semibold">
            {mangaList.reduce((acc, manga) => acc + manga.covers.length, 0)}冊
          </h3>
          {mangaList.slice(0, visibleCount).map((manga) =>
            manga.covers.map((coverObj: Cover, index: number) => (
              <MangaCover
                key={`${manga.id}-${index}`}
                manga={{
                  id: manga.id,
                  title: `${manga.title} ${index + 1}巻`,
                  covers: [coverObj],
                }}
                visible={visible}
                coverTitle={coverObj.title}
              />
            ))
          )}
        </>
      )}
    </>
  );
};

export default MangaListSection;
