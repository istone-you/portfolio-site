import Image from "next/image";

import type { Skill } from "@/types/skill";

const SkillItem = ({ skill }: { skill: Skill }) => {
  return (
    <a
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={
        "fade-in-second mx-6 mb-12 w-24 no-underline group hover:cursor-pointer"
      }
      key={skill.name}
    >
      <div className="duration-200 group-hover:-translate-y-3">
        <div className="center">
          <Image src={skill.image.url} alt="" width={80} height={80} />
        </div>
        <p className="center text-center text-base">{skill.name}</p>
      </div>
    </a>
  );
};

export default SkillItem;
