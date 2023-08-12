import Image from "next/image";
import { useState } from "react";
import CategoryTab from "./CategoryTab";
import SkillList from "./SkillList";

import type { SkillCategoryProps } from "@/types/skill";

const SkillCategory = (props: SkillCategoryProps) => {
  const [selectSkill, setSelectSkill] = useState("Ops");

  return (
    <div>
      <CategoryTab
        skillCategory={props.skillCategory}
        selectSkill={selectSkill}
        setSelectSkill={setSelectSkill}
      />
      <SkillList
        skillCategory={props.skillCategory}
        selectSkill={selectSkill}
      />
    </div>
  );
};

export default SkillCategory;
