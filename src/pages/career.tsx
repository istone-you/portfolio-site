import { careerClient } from "../libs/client";
import Back from "@/components/common/Back";
import CareerContent from "@/components/career/CareerContent";

import type { CarrerDatas } from "@/types/career";

const career = ({ contents }: CarrerDatas) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Back />
        <div className="my-20">
          <h1 className="text-5xl mb-12 flex items-center justify-center">
            Career
          </h1>
          {contents.map((content) => (
            <CareerContent content={content} key={content.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await careerClient.get({
    endpoint: "company",
    queries: { limit: 100 },
  });
  return {
    props: {
      contents: data.contents,
    },
  };
};

export default career;
