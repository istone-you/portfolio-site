import Image from "next/image";

import type { Index } from "@/types/index";

const Title = ({ index }: { index: Index }) => {
  return (
    <>
      <div className="fade-in-first">
        <div className="center">
          <Image
            src={index.thumbnail.url}
            alt="thumbnail"
            width={72}
            height={72}
            className="mt-12 mb-6 rounded-full border border-black"
          />
        </div>
        <h1 className="sm:text-2xl mb-12 center">{index.greeting}</h1>
      </div>
      <p className="fade-in-second mx-12 md:text-xl font-normal center">
        <b>{index.thanks}</b>
      </p>
    </>
  );
};

export default Title;
