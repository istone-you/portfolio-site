import { useState } from "react";
import { skillClient } from "../libs/client";
import Back from "@/components/common/Back";

import CategoryTab from "@/components/skill/CategoryTab";
import SkillList from "@/components/skill/SkillList";

import type { SkillCategoryProps } from "@/types/skill";

const Skill = ({ skillCategory }: SkillCategoryProps) => {
  const [selectSkill, setSelectSkill] = useState("Ops");

  return (
    <div className="mx-48 flex items-center justify-center">
      <div>
        <Back />
        <div className="my-20">
          <h1 className="text-5xl mb-12 flex items-center justify-center">
            Skill
          </h1>
          <CategoryTab
            skillCategory={skillCategory}
            selectSkill={selectSkill}
            setSelectSkill={setSelectSkill}
          />
          <SkillList skillCategory={skillCategory} selectSkill={selectSkill} />
        </div>
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
