import Image from "next/image";

import MangaCover from "./MangaCover";

import type { mangaList, Magazine } from "@/types/manga";

const MagazineModeContents = ({
  magazine,
  mangas,
  visible,
  isTransparent,
}: {
  magazine: Magazine | null;
  mangas: mangaList;
  visible: boolean;
  isTransparent: boolean;
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
      {mangas.map((manga) => (
        <div
          key={manga.id}
          style={{
            opacity: isTransparent ? 0 : 1, // 透明化制御
            transition: "opacity 0.5s ease", // フェード効果
          }}
        >
          <MangaCover key={manga.id} manga={manga} visible={visible} />
        </div>
      ))}
    </div>
  </>
);

export default MagazineModeContents;
