import { useState, useEffect } from "react";
import { indexClient } from "../libs/client";
import { mangaClient } from "../libs/client";
import HomeButton from "@/components/common/HomeButton";
import ViewModeButton from "@/components/manga/ViewModeButton";
import MangaListSection from "@/components/manga/MangaListSection";
import Image from "next/image";
import type { mangaList } from "@/types/manga";
import type { HomeButtonUrl } from "@/types/common";

const Manga = ({
  mangaList,
  homeButtonUrl,
}: {
  mangaList: mangaList;
  homeButtonUrl: HomeButtonUrl;
}) => {
  const [viewMode, setViewMode] = useState<
    "series" | "all" | "serialized" | "magazine"
  >("series");
  const [visible, setVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(20);

  const toggleViewMode = (
    mode: "series" | "all" | "serialized" | "magazine"
  ) => {
    setVisible(false);
    setTimeout(() => {
      setViewMode(mode);
      setVisible(true);
    }, 300);
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 20);
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  const serializedMangaList = mangaList.filter((manga) => manga.is_serialized);
  const nonSerializedMangaList = mangaList.filter(
    (manga) => !manga.is_serialized
  );

  const allCoverCount = mangaList.reduce(
    (acc, manga) => acc + manga.covers.length,
    0
  );

  const magazines = [
    "週刊少年ジャンプ",
    "少年ジャンプ＋",
    "ジャンプSQ.",
    "週刊ヤングジャンプ",
    "となりのヤングジャンプ",
    "スーパージャンプ",
    "週刊少年マガジン",
    "月刊少年マガジン",
    "別冊少年マガジン",
    "マガジンポケット",
    "週刊ヤングマガジン",
    "週刊少年サンデー",
    "ゲッサン",
    "裏サンデー",
    "週刊少年チャンピオン",
    "別冊少年チャンピオン",
    "モーニング",
    "モーニングtwo",
    "アフタヌーン",
    "good！アフタヌーン",
    "ビックコミック",
    "ビックコミックスピリッツ",
    "ビックコミックスペリオール",
    "コロコロコミック",
    "少年ガンガン",
    "ビッグガンガン",
    "ハルタ",
    "青騎士",
    "ヤングアニマル",
    "ヤングキングアワーズ",
  ];

  const buttonModes: Array<{
    label: string;
    mode: "series" | "all" | "serialized" | "magazine";
  }> = [
    { label: "全作品", mode: "series" },
    { label: "全冊", mode: "all" },
    { label: "連載中/完結済", mode: "serialized" },
    { label: "雑誌別", mode: "magazine" },
  ];

  return (
    <div className="center">
      <div>
        <div className="center fade-in-second">
          <div className="mb-10 mt-10 flex space-x-2">
            <ViewModeButton
              buttonModes={buttonModes}
              currentMode={viewMode}
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
              serializedMangaList={serializedMangaList}
              nonSerializedMangaList={nonSerializedMangaList}
              magazines={magazines}
              visible={visible}
              visibleCount={visibleCount}
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
  const [manga, index] = await Promise.all([
    mangaClient.getAllContents({
      endpoint: "manga",
    }),
    indexClient.get({ endpoint: "index" }),
  ]);

  return {
    props: {
      mangaList: manga,
      homeButtonUrl: index.homebutton.url,
    },
  };
};

export default Manga;
