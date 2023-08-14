import { indexClient } from "../libs/client";
import BackButton from "@/components/common/HomeButton";
import PageTitle from "@/components/common/PageTitle";
import Profile from "@/components/about/Profile";
import Contact from "@/components/index/Contact";

import type { Index } from "@/types/index";

const About = ({ index }: { index: Index }) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <BackButton />
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
