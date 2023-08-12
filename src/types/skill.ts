import CategoryTab from "../components/skill/SkillCategoryTab";
export interface SkillCategory {
  id: string;
  name: string;
  business: string;
  private: string;
  business_skill: Skill[];
  private_skill: Skill[];
}

export type SkillCategories = SkillCategory[];

export type SelectSkill = string;
export type SetSelectSkill = React.Dispatch<React.SetStateAction<string>>;

export interface Skill {
  name: string;
  image: {
    url: string;
  };
}
