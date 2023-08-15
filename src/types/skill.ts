export interface SkillCategory {
  id: string;
  name: string;
  business: string;
  private: string;
  business_skill: Skill[];
  private_skill: Skill[];
}

export type SkillCategories = SkillCategory[];

export interface Skill {
  name: string;
  image: {
    url: string;
  };
  url: string;
}

export type SelectSkill = string;
export type SetSelectSkill = React.Dispatch<React.SetStateAction<string>>;
