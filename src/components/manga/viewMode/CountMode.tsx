import MangaCover from "../viewModeContents/MangaCover";

import type { mangaList } from "@/types/manga";

const CountMode = ({
  mangaList,
  visible,
}: {
  mangaList: mangaList;
  visible: boolean;
}) => {
  return (
    <>
      {[...mangaList]
        .sort((a, b) => b.covers.length - a.covers.length)
        .map((manga) => (
          <div
            key={manga.id}
            className="flex flex-col items-center relative mx-2 my-1 group"
          >
            <MangaCover manga={manga} visible={visible} />
            <p className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-full bg-gray-800 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
              {manga.covers.length}
            </p>
          </div>
        ))}
    </>
  );
};

export default CountMode;
