import MangaCover from "../viewModeContents/MangaCover";
import ViewToggle from "../viewModeContents/ViewToggle";
import SerializedModeContents from "../viewModeContents/SerializedModeContents";

import useCountSort from "@/hooks/useCountSort";

import type { mangaList } from "@/types/manga";

const SerializedMode = ({
  mangaList,
  visible,
}: {
  mangaList: mangaList;
  visible: boolean;
}) => {
  const { sortByCount, isReloading, handleToggle } = useCountSort(false);

  const serializedMangaList = mangaList.filter(
    (manga) => manga.is_serialized && manga.id !== "single"
  );
  const nonSerializedMangaList = mangaList.filter(
    (manga) => !manga.is_serialized && manga.id !== "single"
  );

  return (
    <>
      <ViewToggle
        label="冊数順に表示"
        checked={sortByCount}
        onChange={handleToggle}
      />
      <SerializedModeContents
        title="連載中"
        mangaList={serializedMangaList}
        sortByCount={sortByCount}
        isReloading={isReloading}
        visible={visible}
      />
      <SerializedModeContents
        title="完結済"
        mangaList={nonSerializedMangaList}
        sortByCount={sortByCount}
        isReloading={isReloading}
        visible={visible}
      />
    </>
  );
};

export default SerializedMode;
