import { useState } from "react";
import { indexClient } from "../libs/client";
import { skillClient } from "../libs/client";
import HomeButton from "@/components/common/HomeButton";
import PageTitle from "@/components/common/PageTitle";
import SkillCategoryTab from "@/components/skill/SkillCategoryTab";
import SkillList from "@/components/skill/SkillList";

import type { SkillCategories } from "@/types/skill";
import type { HomeButtonUrl } from "@/types/common";

const Skill = ({
  skillCategories,
  homeButtonUrl,
}: {
  skillCategories: SkillCategories;
  homeButtonUrl: HomeButtonUrl;
}) => {
  const [selectSkill, setSelectSkill] = useState("Ops");

  return (
    <div className="center">
      <div className="w-full">
        <HomeButton homeButtonUrl={homeButtonUrl} />
        <PageTitle title="Skill" />
        <SkillCategoryTab
          skillCategories={skillCategories}
          selectSkill={selectSkill}
          setSelectSkill={setSelectSkill}
        />
        <SkillList
          skillCategories={skillCategories}
          selectSkill={selectSkill}
        />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const [skillCategories, index] = await Promise.all([
    skillClient.get({
      endpoint: "category",
    }),
    indexClient.get({ endpoint: "index" }),
  ]);

  return {
    props: {
      skillCategories: skillCategories.contents,
      homeButtonUrl: index.homebutton.url,
    },
  };
};

export default Skill;
