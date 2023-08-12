import { careerClient } from "../libs/client";
import Back from "@/components/common/Back";
import PageTitle from "@/components/common/PageTitle";
import CareerContent from "@/components/career/CareerContents";

import type { Companies } from "@/types/career";

const Career = ({ companies }: { companies: Companies }) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Back />
        <PageTitle title="Career" />
        <CareerContent companies={companies} />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const companies = await careerClient.get({
    endpoint: "company",
    queries: { limit: 100 },
  });
  return {
    props: {
      companies: companies.contents,
    },
  };
};

export default Career;
