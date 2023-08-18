import { indexClient } from "../libs/client";
import { careerClient } from "../libs/client";
import HomeButton from "@/components/common/HomeButton";
import PageTitle from "@/components/common/PageTitle";
import CareerContents from "@/components/career/CareerContents";

import type { Companies } from "@/types/career";
import type { HomeButtonUrl } from "@/types/common";

const Career = ({
  companies,
  homeButtonUrl,
}: {
  companies: Companies;
  homeButtonUrl: HomeButtonUrl;
}) => {
  return (
    <div className="center">
      <div>
        <HomeButton homeButtonUrl={homeButtonUrl} />
        <PageTitle title="Career" />
        <CareerContents companies={companies} />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const [companies, index] = await Promise.all([
    careerClient.get({
      endpoint: "company",
      queries: { limit: 100 },
    }),
    indexClient.get({ endpoint: "index" }),
  ]);

  return {
    props: {
      companies: companies.contents,
      homeButtonUrl: index.homebutton.url,
    },
  };
};

export default Career;
