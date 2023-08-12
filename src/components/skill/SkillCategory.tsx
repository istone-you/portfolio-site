import type { SkillCategoryProps } from "@/types/skill";

const SkillCategory = (props: SkillCategoryProps) => {
  return (
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
        {props.skillCategory.map((skillCategory) => (
          <li
            key={skillCategory.name}
            className="mr-2 list-none"
            role="presentation"
          >
            <button
              className="inline-block p-4 border-b-2 rounded-t-lg"
              data-tabs-target={`#${skillCategory.name}`}
              type="button"
              role="tab"
              aria-controls={`${skillCategory.name}`}
              aria-selected="false"
            >
              {skillCategory.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategory;
