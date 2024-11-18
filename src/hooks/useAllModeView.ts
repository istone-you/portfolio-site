import { useState } from "react";

import type { mangaList } from "@/types/manga";

const useAllModeView = (mangaCount: number) => {
  const [visibleCount, setVisibleCount] = useState(200);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 200);
  };

  const isLoadMoreVisible = visibleCount < mangaCount;

  return {
    visibleCount,
    isLoadMoreVisible,
    handleLoadMore,
  };
};

export default useAllModeView;
