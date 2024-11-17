import Image from "next/image";

const MangaCover = ({
  manga,
  visible,
  coverTitle,
}: {
  manga: {
    id: string;
    title: string;
    covers: Array<{ cover: string; title?: string }>;
  };
  visible: boolean;
  coverTitle?: string;
}) => (
  <div
    key={manga.id}
    className={`relative mx-0.5 my-0.5 w-[50px] h-[80px] overflow-visible hover:z-10 group transition-opacity ${
      visible ? "fade-in" : "fade-out"
    }`}
  >
    <div className="absolute inset-0 flex justify-center items-center">
      <Image
        src={manga.covers[0].cover}
        alt={manga.title}
        width={100}
        height={200}
        loading="lazy"
        unoptimized
        className="w-[50px] transition-transform duration-300 group-hover:scale-150 group-hover:-translate-y-1/4"
        style={{ transformOrigin: "center" }}
      />
    </div>
    <div
      className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-max bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100
      max-w-[100px] whitespace-normal break-words text-center md:max-w-none md:whitespace-nowrap md:break-normal md:text-left"
    >
      {coverTitle ? (
        <span
          dangerouslySetInnerHTML={{
            __html: coverTitle,
          }}
        />
      ) : (
        manga.title
      )}
    </div>
  </div>
);

export default MangaCover;
