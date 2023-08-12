import { indexClient } from "../libs/client";
import Back from "@/components/common/Back";
import PageTitle from "@/components/common/PageTitle";
import Profile from "@/components/about/profile";
import Contact from "@/components/index/Contact";

import type { IndexProps } from "@/types/index";

const About = ({ index }: IndexProps) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Back />
        <PageTitle title="About" />
        <Profile index={index} />
        <Contact index={index} />
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

export default About;
