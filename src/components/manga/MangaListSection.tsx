import SeriesMode from "./viewMode/SeriesMode";
import AllMode from "./viewMode/AllMode";
import SerializedMode from "./viewMode/SerializedMode";
import MagazineMode from "./viewMode/MagazineMode";
import CountMode from "./viewMode/CountMode";

import type { mangaList, magazineList, ViewMode } from "@/types/manga";

const MangaListSection = ({
  viewMode,
  mangaList,
  visible,
  visibleCount,
  magazineList,
}: {
  viewMode: ViewMode;
  mangaList: mangaList;
  visible: boolean;
  visibleCount: number;
  magazineList: magazineList;
}) => {
  return (
    <>
      {viewMode === "series" && (
        <SeriesMode mangaList={mangaList} visible={visible} />
      )}
      {viewMode === "all" && (
        <AllMode
          mangaList={mangaList}
          visible={visible}
          visibleCount={visibleCount}
        />
      )}
      {viewMode === "serialized" && (
        <SerializedMode mangaList={mangaList} visible={visible} />
      )}
      {viewMode === "magazine" && (
        <MagazineMode
          mangaList={mangaList}
          visible={visible}
          magazineList={magazineList}
        />
      )}
      {viewMode === "count" && (
        <CountMode mangaList={mangaList} visible={visible} />
      )}
    </>
  );
};

export default MangaListSection;
