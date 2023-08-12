import Image from "next/image";

import type { Index } from "@/types/index";

const Title = ({ index }: { index: Index }) => {
  return (
    <>
      <div className="fade-in-first">
        <div className="flex items-center justify-center">
          <Image
            src={index.thumbnail.url}
            alt="thumbnail"
            width={64}
            height={64}
            className="mt-12 mb-6 rounded-full border border-black"
          />
        </div>
        <h1 className="sm:text-2xl mb-12 flex items-center justify-center">
          {index.greeting}
        </h1>
      </div>
      <p className="fade-in-second sm:text-xs md:text-xl lg:text-xl xl:text-xl font-normal flex items-center justify-center">
        <b>{index.thanks}</b>
      </p>
    </>
  );
};

export default Title;
