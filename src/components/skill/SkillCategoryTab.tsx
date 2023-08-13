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
        <div key={skillCategory.name} className="mx-2 list-none">
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
            } px-4 py-1 font-bold border border-black button-shadow `}
          >
            {skillCategory.name}
          </div>
        </div>
      ))}
    </ul>
  );
};

export default SkillCategoryTab;