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
