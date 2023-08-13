import { indexClient } from "../libs/client";
import Back from "@/components/common/Back";
import PageTitle from "@/components/common/PageTitle";
import Form from "@/components/inquiry/Form";

import type { Index } from "@/types/index";

const Inquiry = ({ index }: { index: Index }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-1/2">
        <Back />
        <PageTitle title="Inquiry Form" />
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
