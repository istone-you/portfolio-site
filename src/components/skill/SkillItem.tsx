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
    <div className={"fade-in-second mx-6 mb-12 w-24"} key={skill.name}>
      <div className="flex items-center justify-center">
        <Image src={skill.image.url} alt="" width={80} height={80} />
      </div>
      <b className="flex items-center justify-center text-center">
        {skill.name}
      </b>
    </div>
  );
};

export default SkillItem;
