import Image from "next/image";
import { indexClient } from "../libs/client";
import Back from "@/components/common/Back";
import Contact from "@/components/index/Contact";

interface IndexData {
  thumbnail: {
    url: string;
  };
  about: string;
  email: string;
  twitter: string;
}

interface IndexDataProps {
  indexData: IndexData;
}

const about = ({ indexData }: IndexDataProps) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Back />
        <div className="my-20">
          <h1 className="text-5xl mb-2 flex items-center justify-center">
            About
          </h1>
          <div className="flex items-center justify-center">
            <Image
              src={indexData.thumbnail.url}
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
              __html: `${indexData.about}`,
            }}
          />
        </div>
        <Contact email={indexData.email} twitter={indexData.twitter} />
      </div>
    </div>
  );
};
export const getStaticProps = async () => {
  const indexData = await indexClient.get({ endpoint: "index" });

  return {
    props: {
      indexData,
    },
  };
};

export default about;
