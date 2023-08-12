import Image from "next/image";

import type { SkillItemProps } from "@/types/skill";

const SkillItem = (props: SkillItemProps) => {
  return (
    <div
      className={`mx-6 mb-12 ${props.category == "AWS" ? "w-40" : "w-24"}`}
      key={props.skill.name}
    >
      <div className="flex items-center justify-center">
        <Image src={props.skill.image.url} alt="" width={80} height={80} />
      </div>
      <div className="flex items-center justify-center">
        <b>{props.skill.name}</b>
      </div>
    </div>
  );
};

export default SkillItem;
