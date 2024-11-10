import type {
  RepoCategories,
  RepoCategory,
  SelectRepoCategory,
  SetSelectRepoCategory,
} from "@/types/github";

const GitHubCategoryTab = ({
  repoCategories,
  selectRepoCategory,
  setselectRepoCategory,
}: {
  repoCategories: RepoCategories;
  selectRepoCategory: SelectRepoCategory;
  setselectRepoCategory: SetSelectRepoCategory;
}) => {
  return (
    <ul className="fade-in-second my-10 center-wrap">
      {repoCategories.map((repoCategory: RepoCategory) => (
        <div key={repoCategory.name} className="mb-2 mx-2 center">
          <div
            onClick={() => setselectRepoCategory(repoCategory.name)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setselectRepoCategory(repoCategory.name);
              }
            }}
            role="button"
            tabIndex={0}
            className={`px-4 py-1 title-shadow 
              ${
                selectRepoCategory === repoCategory.name
                  ? "tab-selected"
                  : "tab-unselected"
              }`}
          >
            {repoCategory.name}
          </div>
        </div>
      ))}
    </ul>
  );
};

export default GitHubCategoryTab;
