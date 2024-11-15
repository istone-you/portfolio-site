import { useState, useEffect } from "react";

import { mangaClient } from "../libs/client";

import ViewModeButton from "@/components/manga/ViewModeButton";
import MangaListSection from "@/components/manga/MangaListSection";
import type { mangaList, magazineList, ViewMode } from "@/types/manga";

const Manga = ({
  mangaList,
  magazineList,
}: {
  mangaList: mangaList;
  magazineList: magazineList;
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>("series");
  const [visible, setVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(200);

  const toggleViewMode = (mode: ViewMode) => {
    setVisible(false);
    setTimeout(() => {
      setViewMode(mode);
      setVisible(true);
    }, 300);
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 200);
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="center">
      <div>
        <div className="center fade-in-second">
          <div className="flex mb-10 mt-10 space-x-2">
            <ViewModeButton
              viewMode={viewMode}
              toggleViewMode={toggleViewMode}
            />
          </div>
        </div>
        <div className="mx-auto fade-in-third">
          <div
            className={`flex flex-wrap items-center justify-center ${
              visible ? "fade-in" : "fade-out"
            }`}
          >
            <MangaListSection
              viewMode={viewMode}
              mangaList={mangaList}
              visible={visible}
              visibleCount={visibleCount}
              magazineList={magazineList}
            />
          </div>
        </div>
        {viewMode === "all" &&
          visibleCount <
            mangaList.reduce((acc, manga) => acc + manga.covers.length, 0) && (
            <button
              className="block mt-5 mx-auto group"
              onClick={handleLoadMore}
            >
              <div className="px-3 py-0.5 button-shadow">もっと見る</div>
            </button>
          )}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const [manga, magazines] = await Promise.all([
    mangaClient.getAllContents({
      endpoint: "manga",
    }),
    mangaClient.getAllContents({
      endpoint: "magazines",
    }),
  ]);

  return {
    props: {
      mangaList: manga,
      magazineList: magazines,
    },
  };
};

export default Manga;
