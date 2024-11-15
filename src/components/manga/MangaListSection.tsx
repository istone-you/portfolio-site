import Image from "next/image";

import MangaCover from "./MangaCover";
import MagazineMangaList from "./MagazineMangaList";

import type {
  Manga,
  Cover,
  mangaList,
  magazineList,
  ViewMode,
} from "@/types/manga";

const MangaListSection = ({
  viewMode,
  mangaList,
  visible,
  visibleCount,
  magazineList,
}: {
  viewMode: ViewMode;
  mangaList: mangaList;
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
          {[...serializedMangaList]
            .sort((a, b) => b.covers.length - a.covers.length)
            .map((manga) => (
              <MangaCover key={manga.id} manga={manga} visible={visible} />
            ))}
          <h3 className="w-full text-center mt-6 mb-2 text-lg font-semibold">
            完結済（{nonSerializedMangaList.length}作品）
          </h3>
          {[...nonSerializedMangaList]
            .sort((a, b) => b.covers.length - a.covers.length)
            .map((manga) => (
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
          {[...mangaList]
            .sort((a, b) => {
              const nameA = a.covers[0].title || "";
              const nameB = b.covers[0].title || "";
              return nameA.localeCompare(nameB, "ja"); // 'ja'で日本語の並び順をサポート
            })
            .map((manga) => (
              <MangaCover key={manga.id} manga={manga} visible={visible} />
            ))}
        </>
      )}
      {viewMode === "all" && (
        <>
          <h3 className="w-full text-center mt-4 mb-2 text-lg font-semibold">
            {mangaList.reduce((acc, manga) => acc + manga.covers.length, 0)}冊
          </h3>
          {mangaList
            .flatMap((manga) =>
              manga.covers.map((coverObj, index) => ({
                mangaId: manga.id,
                mangaTitle: manga.title,
                coverObj,
                coverIndex: index,
              }))
            )
            // ソート条件を修正: covers の数を基準にする
            .sort(
              (a, b) =>
                mangaList.find((manga) => manga.id === b.mangaId)!.covers
                  .length -
                mangaList.find((manga) => manga.id === a.mangaId)!.covers.length
            )
            .slice(0, visibleCount) // 全体から visibleCount 分を抽出
            .map(({ mangaId, mangaTitle, coverObj, coverIndex }) => (
              <MangaCover
                key={`${mangaId}-${coverIndex}`}
                manga={{
                  id: mangaId,
                  title: `${mangaTitle} ${coverIndex + 1}巻`,
                  covers: [coverObj],
                }}
                visible={visible}
                coverTitle={coverObj.title}
              />
            ))}
        </>
      )}
      {viewMode === "count" && (
        <>
          {[...mangaList]
            .sort((a, b) => b.covers.length - a.covers.length)
            .map((manga) => (
              <div
                key={manga.id}
                className="flex flex-col items-center relative mx-2 my-1 group"
              >
                <MangaCover manga={manga} visible={visible} />
                <p className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-full bg-gray-800 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                  {manga.covers.length}
                </p>
              </div>
            ))}
        </>
      )}
    </>
  );
};

export default MangaListSection;
