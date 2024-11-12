import Image from "next/image";

import MangaCover from "./MangaCover";

import type { mangaList, Magazine, Cover } from "@/types/manga";

const MagazineMangaList = ({
  magazine,
  mangas,
  visible,
}: {
  magazine: Magazine | null;
  mangas: mangaList;
  visible: boolean;
}) => (
  <>
    <div className="flex justify-center items-center mb-4">
      {magazine ? (
        <Image
          src={magazine.logo.url}
          alt={magazine.name}
          width={100}
          height={200}
          loading="lazy"
          unoptimized
          style={{
            height: "40px",
            width: "auto",
            transformOrigin: "center",
          }}
        />
      ) : (
        <h3 className="text-center text-lg font-semibold">その他</h3>
      )}
    </div>
    {/* {magazine?.id == "grand-jump" && (
      <p className="text-center text-xs font-medium mb-6">
        ※ スーパージャンプ、ビジネスジャンプも含む
      </p>
    )} */}
    <div className="flex flex-wrap items-center justify-center">
      {mangas.length > 0 ? (
        mangas.map((manga) => (
          <MangaCover key={manga.id} manga={manga} visible={visible} />
        ))
      ) : (
        <div className="text-center text-gray-500 mt-2 mb-6">
          作品がありません
        </div>
      )}
    </div>
  </>
);

export default MagazineMangaList;
