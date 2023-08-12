import { careerClient } from "../libs/client";
import Back from "@/components/common/Back";
import PageTitle from "@/components/common/PageTitle";
import CareerContent from "@/components/career/CareerContent";

import type { CarrerDatas } from "@/types/career";

const Career = ({ carrerDatas }: CarrerDatas) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Back />
        <PageTitle title="Career" />
        {carrerDatas.map((carrerData) => (
          <CareerContent carrerData={carrerData} key={carrerData.id} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const carrerDatas = await careerClient.get({
    endpoint: "company",
    queries: { limit: 100 },
  });
  return {
    props: {
      carrerDatas: carrerDatas.contents,
    },
  };
};

export default Career;
