import CategoryTab from "../components/skill/CategoryTab";
export interface SkillCategory {
  id: string;
  name: string;
  business: string;
  private: string;
  business_skill: BusinessSkill[];
  private_skill: PriveteSkill[];
}

export interface BusinessSkill {
  name: string;
  image: {
    url: string;
  };
}

export interface PriveteSkill {
  name: string;
  image: {
    url: string;
  };
}

export interface SkillCategoryProps {
  skillCategory: SkillCategory[];
}

export interface CategoryTabProps {
  skillCategory: SkillCategory[];
  setSelectSkill: React.Dispatch<React.SetStateAction<string>>;
  selectSkill: string;
}

export interface SkillListProps {
  skillCategory: SkillCategory[];
  selectSkill: string;
}

export interface SkillItemProps {
  skill: BusinessSkill | PriveteSkill;
  category: string;
}
