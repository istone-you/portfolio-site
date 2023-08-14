import { indexClient } from "../libs/client";
import HomeButton from "@/components/common/HomeButton";
import PageTitle from "@/components/common/PageTitle";
import Description from "@/components/inquiry/Description";
import Form from "@/components/inquiry/Form";

import type { Index } from "@/types/index";

const Inquiry = ({ index }: { index: Index }) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <HomeButton />
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
    },
  };
};

export default Inquiry;
