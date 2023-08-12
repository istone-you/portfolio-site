import React, { Dispatch, SetStateAction } from "react";
import type {
  SkillCategories,
  SelectSkill,
  SetSelectSkill,
} from "@/types/skill";

const SkillCategoryTab = ({
  skillCategories,
  selectSkill,
  setSelectSkill,
}: {
  skillCategories: SkillCategories;
  selectSkill: SelectSkill;
  setSelectSkill: SetSelectSkill;
}) => {
  return (
    <ul className="fade-in-second mb-12 flex items-center justify-center text-sm font-medium text-center">
      {skillCategories.map((skillCategory) => (
        <div key={skillCategory.name} className="w-full list-none">
          <div
            onClick={() => setSelectSkill(skillCategory.name)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectSkill(skillCategory.name);
              }
            }}
            role="button"
            tabIndex={0}
            className={`w-48 ${
              selectSkill === skillCategory.name
                ? "pointer-events-none"
                : "pointer-events-auto"
            } ${selectSkill === skillCategory.name ? "" : "bg-transparent"} ${
              selectSkill === skillCategory.name
                ? "cursor-default"
                : "cursor-pointer"
            } ${
              selectSkill === skillCategory.name ? "text-white" : "text-black"
            } ${
              selectSkill === skillCategory.name ? "bg-black" : ""
            } border-b-2 border-black text-base w-full `}
          >
            {skillCategory.name}
          </div>
        </div>
      ))}
    </ul>
  );
};

export default SkillCategoryTab;
