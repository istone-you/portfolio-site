import MangaCover from "../viewModeContents/MangaCover";

import type { mangaList } from "@/types/manga";

const SerializedModeContents = ({
  title,
  mangaList,
  sortByCount,
  isReloading,
  visible,
}: {
  title: string;
  mangaList: mangaList;
  sortByCount: boolean;
  isReloading: boolean;
  visible: boolean;
}) => {
  return (
    <>
      <h3
        className={`w-full text-center mb-2 text-lg font-semibold ${
          title == "完結済" ? "mt-8" : ""
        }`}
      >
        {title}（{mangaList.length}作品）
      </h3>
      {[...mangaList]
        .sort(
          (a, b) =>
            sortByCount
              ? b.covers.length - a.covers.length // 冊数順
              : (a.covers[0].title || "").localeCompare(
                  b.covers[0].title || "",
                  "ja"
                ) // タイトル順
        )
        .map((manga) => (
          <div
            key={manga.id}
            style={{
              opacity: isReloading ? 0 : 1, // リロード中は透明度を調整
              transition: "opacity 0.3s ease", // スムーズな切り替え
            }}
            className={`transition-opacity ${
              sortByCount
                ? "flex flex-col items-center relative mx-2 my-1 group"
                : ""
            }`}
          >
            <MangaCover key={manga.id} manga={manga} visible={visible} />
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

export default SerializedModeContents;
