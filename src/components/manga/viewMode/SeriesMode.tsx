import MangaCover from "../viewModeContents/MangaCover";

import type { mangaList } from "@/types/manga";

const SeriesMode = ({
  mangaList,
  visible,
}: {
  mangaList: mangaList;
  visible: boolean;
}) => {
  const filteredMangaList = mangaList.filter((manga) => manga.id !== "single");

  return (
    <>
      <h3 className="w-full text-center mt-4 mb-2 text-lg font-semibold">
        {filteredMangaList.length}作品
      </h3>
      {[...filteredMangaList]
        .sort((a, b) =>
          (a.covers[0].title || "").localeCompare(b.covers[0].title || "", "ja")
        )
        .map((manga) => (
          <MangaCover key={manga.id} manga={manga} visible={visible} />
        ))}
    </>
  );
};

export default SeriesMode;
