import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import type { ViewMode, mangaList } from "@/types/manga";

const useMangaView = (mangaList: mangaList) => {
  const router = useRouter();
  const { viewMode: urlViewMode } = router.query;

  const [viewMode, setViewMode] = useState<ViewMode>("series");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 初期表示時、URL の viewMode パラメータを状態に反映
    if (
      urlViewMode &&
      ["series", "all", "serialized", "magazine", "count"].includes(
        urlViewMode as string
      )
    ) {
      setViewMode(urlViewMode as ViewMode);
    }
  }, [urlViewMode]);

  const toggleViewMode = (mode: ViewMode) => {
    setVisible(false);
    setTimeout(() => {
      setViewMode(mode);
      setVisible(true);
      // URL を更新
      router.push(
        {
          pathname: router.pathname,
          query: { ...router.query, viewMode: mode },
        },
        undefined,
        { shallow: true }
      );
    }, 300);
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  return {
    viewMode,
    visible,
    toggleViewMode,
  };
};

export default useMangaView;
