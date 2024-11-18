import MangaCover from "../viewModeContents/MangaCover";
import ViewToggle from "../viewModeContents/ViewToggle";

import useCountSort from "@/hooks/useCountSort";

import type { mangaList } from "@/types/manga";

const SeriesMode = ({ mangaList }: { mangaList: mangaList }) => {
  const { sortByCount, isReloading, handleToggle } = useCountSort(false);

  const filteredMangaList = mangaList.filter((manga) => manga.id !== "single");

  return (
    <>
      <ViewToggle
        label="冊数順に表示"
        checked={sortByCount}
        onChange={handleToggle} // useSeriesModeViewのhandleToggleを使用
      />
      <h3 className="w-full text-center mb-2 text-lg font-semibold">
        {filteredMangaList.length}作品
      </h3>
      {[...filteredMangaList]
        .sort((a, b) => {
          if (sortByCount) {
            return b.covers.length - a.covers.length; // 冊数順
          } else {
            return (a.covers[0].title || "").localeCompare(
              b.covers[0].title || "",
              "ja"
            ); // タイトル順
          }
        })
        .map((manga) => (
          <div
            key={manga.id}
            style={{
              opacity: isReloading ? 0 : 1, // 透明化制御
              transition: "opacity 0.5s ease", // フェード効果
            }}
            className={`transition-opacity ${
              sortByCount
                ? "flex flex-col items-center relative mx-2 my-1 group"
                : ""
            }`}
          >
            <MangaCover manga={manga} visible={null} />
            {sortByCount && (
              <p className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-full bg-gray-800 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                {manga.covers.length}
              </p>
            )}
          </div>
        ))}
    </>
  );
};

export default SeriesMode;
