import MangaCover from "./MangaCover";

import type { Cover } from "@/types/manga";

const MangaListSection = ({
  viewMode,
  mangaList,
  serializedMangaList,
  nonSerializedMangaList,
  magazines,
  visible,
}: {
  viewMode: "series" | "all" | "serialized" | "magazine";
  mangaList: Array<any>;
  serializedMangaList: Array<any>;
  nonSerializedMangaList: Array<any>;
  magazines: Array<string>;
  visible: boolean;
}) => (
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
      <>
        {magazines.map((magazine) => {
          const filteredMangas = mangaList.filter(
            (manga) => manga.magazine == magazine
          );
          return (
            <div key={magazine} className="w-full mb-4">
              <h3 className="text-center text-lg font-semibold">
                {magazine}（{filteredMangas.length}作品）
              </h3>
              <div className="flex flex-wrap items-center justify-center">
                {filteredMangas.length > 0 ? (
                  filteredMangas.map((manga) => (
                    <MangaCover
                      key={manga.id}
                      manga={manga}
                      visible={visible}
                    />
                  ))
                ) : (
                  <div className="text-center text-gray-500">
                    作品がありません
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* その他の作品を表示 */}
        <div className="w-full mb-4">
          <h3 className="text-center text-lg font-semibold">その他</h3>
          <div className="flex flex-wrap items-center justify-center">
            {mangaList
              .filter(
                (manga) =>
                  manga.id !== "single" &&
                  !magazines.some((magazine) =>
                    manga.magazine.includes(magazine)
                  )
              )
              .map((manga) => (
                <MangaCover key={manga.id} manga={manga} visible={visible} />
              ))}
          </div>
        </div>
      </>
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
        {mangaList.map((manga) =>
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

export default MangaListSection;
