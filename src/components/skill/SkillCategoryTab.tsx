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
    <ul className="fade-in-second mb-12 center-wrap">
      {skillCategories.map((skillCategory) => (
        <div key={skillCategory.name} className="mx-2 my-2">
          <div
            onClick={() => setSelectSkill(skillCategory.name)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectSkill(skillCategory.name);
              }
            }}
            role="button"
            tabIndex={0}
            className={`${
              selectSkill === skillCategory.name
                ? "pointer-events-none"
                : "pointer-events-auto"
            }  ${
              selectSkill === skillCategory.name
                ? "cursor-default"
                : "cursor-pointer"
            } ${
              selectSkill === skillCategory.name ? "bg-black" : "text-black"
            } ${
              selectSkill === skillCategory.name ? "text-white" : "bg-white"
            } ${
              selectSkill === skillCategory.name
                ? "shadow-none translate-y-1 translate-x-1"
                : ""
            } px-8 py-1 title-shadow`}
          >
            {skillCategory.name}
          </div>
        </div>
      ))}
    </ul>
  );
};

export default SkillCategoryTab;
