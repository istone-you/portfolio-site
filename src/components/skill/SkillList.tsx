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
    <ul className="fade-in-second mb-12">
      {skillCategories.map((skillCategory) => (
        <div key={skillCategory.name}>
          {selectSkill === skillCategory.name && (
            <>
              <p className="mb-12 flex items-center justify-center">
                {skillCategory.business}
              </p>
              <div className="mx-auto">
                <div className="flex flex-wrap items-center justify-center">
                  {skillCategory.business_skill.map((business_skill) => (
                    <SkillItem
                      skill={business_skill}
                      skillCategory={skillCategory}
                      key={business_skill.name}
                    />
                  ))}
                </div>
              </div>
              <p className="mb-12 flex items-center justify-center">
                {skillCategory.private}
              </p>
              <div className="flex items-center justify-center">
                {skillCategory.private_skill.map((private_skill) => (
                  <SkillItem
                    skill={private_skill}
                    skillCategory={skillCategory}
                    key={private_skill.name}
                  />
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
