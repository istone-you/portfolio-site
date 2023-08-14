import { useState } from "react";
import { skillClient } from "../libs/client";
import Back from "@/components/common/Back";
import PageTitle from "@/components/common/PageTitle";

import SkillCategoryTab from "@/components/skill/SkillCategoryTab";
import SkillList from "@/components/skill/SkillList";

import type { SkillCategories } from "@/types/skill";

const Skill = ({ skillCategories }: { skillCategories: SkillCategories }) => {
  const [selectSkill, setSelectSkill] = useState("Ops");

  return (
    <div className="flex items-center justify-center">
      <div className="w-full">
        <Back />
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
  const skillCategories = await skillClient.get({
    endpoint: "category",
  });

  return {
    props: {
      skillCategories: skillCategories.contents,
    },
  };
};

export default Skill;
