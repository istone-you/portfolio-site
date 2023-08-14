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
        <div
          key={repoCategory.name}
          className="hover:cursor-pointer mb-2 mx-2 center"
        >
          <div
            onClick={() => setselectRepoCategory(repoCategory.name)}
            className={`text-black px-4 py-1 title-shadow ${
              selectRepoCategory == repoCategory.name
                ? "pointer-events-none"
                : "pointer-events-auto"
            }  ${
              selectRepoCategory == repoCategory.name
                ? "cursor-default"
                : "cursor-pointer"
            } ${
              selectRepoCategory == repoCategory.name
                ? "bg-black"
                : "text-black"
            } ${
              selectRepoCategory == repoCategory.name
                ? "text-white"
                : "bg-white"
            } ${
              selectRepoCategory == repoCategory.name
                ? "shadow-none translate-y-1 translate-x-1"
                : ""
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
