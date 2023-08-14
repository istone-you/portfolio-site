import { careerClient } from "../libs/client";
import HomeButton from "@/components/common/HomeButton";
import PageTitle from "@/components/common/PageTitle";
import CareerContents from "@/components/career/CareerContents";

import type { Companies } from "@/types/career";

const Career = ({ companies }: { companies: Companies }) => {
  return (
    <div className="center">
      <div>
        <HomeButton />
        <PageTitle title="Career" />
        <CareerContents companies={companies} />
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
