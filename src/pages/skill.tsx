import { useState } from "react";
import { skillClient } from "../libs/client";
import Back from "@/components/common/Back";
import PageTitle from "@/components/common/PageTitle";

import SkillCategoryTab from "@/components/skill/SkillCategoryTab";
import SkillList from "@/components/skill/SkillList";

import type { SkillCategoryProps } from "@/types/skill";

const Skill = ({ skillCategory }: SkillCategoryProps) => {
  const [selectSkill, setSelectSkill] = useState("Ops");

  return (
    <div className="mx-48 flex items-center justify-center">
      <div className="w-full">
        <Back />
        <PageTitle title="Skill" />
        <SkillCategoryTab
          skillCategory={skillCategory}
          selectSkill={selectSkill}
          setSelectSkill={setSelectSkill}
        />
        <SkillList skillCategory={skillCategory} selectSkill={selectSkill} />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const skillCategory = await skillClient.get({
    endpoint: "category",
  });

  return {
    props: {
      skillCategory: skillCategory.contents,
    },
  };
};

export default Skill;
