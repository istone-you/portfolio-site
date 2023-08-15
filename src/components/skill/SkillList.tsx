import SkillItem from "./SkillItem";

import type { SkillCategories, SelectSkill } from "@/types/skill";

const SkillList = ({
  skillCategories,
  selectSkill,
}: {
  skillCategories: SkillCategories;
  selectSkill: SelectSkill;
}) => {
  return (
    <ul className="fade-in-second mx-4 xl:mx-48 mb-12">
      {skillCategories.map((skillCategory) => (
        <div key={skillCategory.name}>
          {selectSkill === skillCategory.name && (
            <>
              <p className="font-bold mb-12 center">{skillCategory.business}</p>
              <div className="mx-auto">
                <div className="flex flex-wrap items-start justify-center">
                  {skillCategory.business_skill.map((business_skill) => (
                    <SkillItem
                      skill={business_skill}
                      key={business_skill.name}
                    />
                  ))}
                </div>
              </div>
              <p className="font-bold mb-12 center">{skillCategory.private}</p>
              <div className="center-wrap">
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
