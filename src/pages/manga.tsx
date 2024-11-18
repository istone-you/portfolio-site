import { mangaClient } from "../libs/client";

import ViewModeButton from "@/components/manga/ViewModeButton";
import MangaListSection from "@/components/manga/MangaListSection";

import type { mangaList, magazineList, ViewMode } from "@/types/manga";

import useMangaView from "@/hooks/useMangaView";

const Manga = ({
  mangaList,
  magazineList,
}: {
  mangaList: mangaList;
  magazineList: magazineList;
}) => {
  const { viewMode, visible, toggleViewMode } = useMangaView(mangaList);

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
              magazineList={magazineList}
            />
          </div>
        </div>
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
