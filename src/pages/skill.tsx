import { skillClient } from "../libs/client";
import Back from "@/components/common/Back";
import SkillCategory from "@/components/skill/SkillCategory";

import type { SkillCategoryProps } from "@/types/skill";

const skill = ({ skillCategory }: SkillCategoryProps) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Back />
        <div className="my-20">
          <h1 className="text-5xl mb-12 flex items-center justify-center">
            Skill
          </h1>
          <SkillCategory skillCategory={skillCategory} />
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

export default skill;
