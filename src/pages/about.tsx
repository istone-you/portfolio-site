import { indexClient } from "../libs/client";
import HomeButton from "@/components/common/HomeButton";
import PageTitle from "@/components/common/PageTitle";
import Profile from "@/components/about/Profile";
import Contact from "@/components/index/Contact";

import type { Index } from "@/types/index";
import type { HomeButtonUrl } from "@/types/common";

const About = ({
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
      homeButtonUrl: index.homebutton.url,
    },
  };
};

export default About;
