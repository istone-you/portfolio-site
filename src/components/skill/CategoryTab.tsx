import React, { Dispatch, SetStateAction } from "react";
import type { CategoryTabProps } from "@/types/skill";

const CategoryTab = (props: CategoryTabProps) => {
  return (
    <ul className="mb-12 flex items-center justify-center text-sm font-medium text-center">
      {props.skillCategory.map((skillCategory) => (
        <div key={skillCategory.name} className="list-none">
          <div
            onClick={() => props.setSelectSkill(skillCategory.name)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                props.setSelectSkill(skillCategory.name);
              }
            }}
            role="button"
            tabIndex={0}
            className={`w-48 ${
              props.selectSkill === skillCategory.name
                ? "pointer-events-none"
                : "pointer-events-auto"
            } ${
              props.selectSkill === skillCategory.name ? "" : "bg-transparent"
            } ${
              props.selectSkill === skillCategory.name
                ? "cursor-default"
                : "cursor-pointer"
            } ${
              props.selectSkill === skillCategory.name
                ? "text-white"
                : "text-black"
            } ${
              props.selectSkill === skillCategory.name ? "bg-black" : ""
            } border-b-2 border-black text-base`}
          >
            {skillCategory.name}
          </div>
        </div>
      ))}
    </ul>
  );
};

export default CategoryTab;
