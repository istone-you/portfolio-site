import { indexClient } from "../libs/client";
import HomeButton from "@/components/common/HomeButton";
import PageTitle from "@/components/common/PageTitle";
import Description from "@/components/inquiry/Description";
import Form from "@/components/inquiry/Form";

import type { Index } from "@/types/index";
import type { HomeButtonUrl } from "@/types/common";

const Inquiry = ({
  index,
  homeButtonUrl,
}: {
  index: Index;
  homeButtonUrl: HomeButtonUrl;
}) => {
  return (
    <div className="center">
      <div>
        <HomeButton homeButtonUrl={homeButtonUrl} />
        <PageTitle title="Inquiry Form" />
        <Description index={index} />
        <Form index={index} />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const index = await indexClient.get({ endpoint: "index" });

  return {
    props: {
      index,
      homeButtonUrl: index.homebutton.url,
    },
  };
};

export default Inquiry;
