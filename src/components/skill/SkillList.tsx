import SkillItem from "./SkillItem";

import type { SkillListProps } from "@/types/skill";

const SkillList = (props: SkillListProps) => {
  return (
    <ul className="mb-12">
      {props.skillCategory.map((skillCategory) => (
        <div key={skillCategory.name}>
          {props.selectSkill === skillCategory.name && (
            <>
              <p className="mb-12 flex items-center justify-center">
                {skillCategory.business}
              </p>
              <div className="flex items-center justify-center">
                {skillCategory.business_skill.map((business_skill) => (
                  <SkillItem skill={business_skill} key={business_skill.name} />
                ))}
              </div>
              <p className="mb-12 flex items-center justify-center">
                {skillCategory.private}
              </p>
              <div className="flex items-center justify-center">
                {skillCategory.private_skill.map((private_skill) => (
                  <SkillItem skill={private_skill} key={private_skill.name} />
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </ul>
  );
};

export default SkillList;
