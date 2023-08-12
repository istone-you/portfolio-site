import Image from "next/image";

import type { Skill, SkillCategory } from "@/types/skill";

const SkillItem = ({
  skill,
  skillCategory,
}: {
  skill: Skill;
  skillCategory: SkillCategory;
}) => {
  return (
    <div
      className={`mx-6 mb-12 ${skillCategory.name == "AWS" ? "w-40" : "w-24"}`}
      key={skill.name}
    >
      <div className="flex items-center justify-center">
        <Image src={skill.image.url} alt="" width={80} height={80} />
      </div>
      <div className="flex items-center justify-center">
        <b>{skill.name}</b>
      </div>
    </div>
  );
};

export default SkillItem;
