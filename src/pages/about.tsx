import Image from "next/image";
import { indexClient } from "../libs/client";
import Back from "@/components/common/Back";

interface AboutData {
  aboutData: string;
}

interface ThumbnailImage {
  thumbnailImage: string;
}

const about = ({ aboutData, thumbnailImage }: AboutData & ThumbnailImage) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Back />
        <div className="mx-64 my-28">
          <h1 className="text-5xl mb-6 flex items-center justify-center">
            About
          </h1>
          <div className="flex items-center justify-center">
            <Image
              src={thumbnailImage}
              alt="thumbnail"
              width={100}
              height={100}
              className="mt-12 mb-6 rounded-full border border-black"
            />
          </div>
          <div className="mb-12 flex items-center justify-center">
            <h1 className="text-2xl">石井 湧</h1>
          </div>
          <div
            className="prose"
            dangerouslySetInnerHTML={{
              __html: `${aboutData}`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default about;

export const getStaticProps = async () => {
  const indexData = await indexClient.get({ endpoint: "index" });

  return {
    props: {
      aboutData: indexData.about,
      thumbnailImage: indexData.thumbnail.url,
    },
  };
};
