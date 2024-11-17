import MangaCover from "../viewModeContents/MangaCover";

import type { mangaList } from "@/types/manga";

const SerializedMode = ({
  mangaList,
  visible,
}: {
  mangaList: mangaList;
  visible: boolean;
}) => {
  const serializedMangaList = mangaList.filter((manga) => manga.is_serialized);
  const nonSerializedMangaList = mangaList.filter(
    (manga) => !manga.is_serialized
  );

  return (
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
  );
};

export default SerializedMode;
