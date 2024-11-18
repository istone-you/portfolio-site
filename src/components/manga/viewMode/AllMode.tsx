import MangaCover from "../viewModeContents/MangaCover";
import LoadMoreButton from "../viewModeContents/LoadMoreButton";

import useAllModeView from "@/hooks/useAllModeView";

import type { mangaList } from "@/types/manga";

const AllMode = ({
  mangaList,
  visible,
}: {
  mangaList: mangaList;
  visible: boolean;
}) => {
  const mangaCount = mangaList.reduce(
    (acc, manga) => acc + manga.covers.length,
    0
  );
  const { visibleCount, isLoadMoreVisible, handleLoadMore } =
    useAllModeView(mangaCount);

  return (
    <>
      <h3 className="w-full text-center mt-4 mb-2 text-lg font-semibold">
        {mangaCount}冊
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
        .sort(
          (a, b) =>
            mangaList.find((manga) => manga.id === b.mangaId)!.covers.length -
            mangaList.find((manga) => manga.id === a.mangaId)!.covers.length
        )
        .slice(0, visibleCount)
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
      <div className="w-full">
        <LoadMoreButton
          onClick={handleLoadMore}
          isVisible={isLoadMoreVisible}
        />
      </div>
    </>
  );
};

export default AllMode;
