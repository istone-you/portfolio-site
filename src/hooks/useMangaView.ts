import { useState, useEffect } from "react";
import type { ViewMode, mangaList } from "@/types/manga";

const useMangaView = (mangaList: mangaList) => {
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

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 200);
  };

  const isLoadMoreVisible =
    viewMode === "all" &&
    visibleCount <
      mangaList.reduce((acc, manga) => acc + manga.covers.length, 0);

  return {
    viewMode,
    visible,
    visibleCount,
    toggleViewMode,
    handleLoadMore,
    isLoadMoreVisible,
  };
};

export default useMangaView;
