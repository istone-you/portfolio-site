import type {
  RepoCategories,
  RepoCategory,
  SelectRepoCategory,
  SetSelectRepoCategory,
} from "@/types/github";

const GitHubRepoCategoryList = ({
  repoCategories,
  selectRepoCategory,
  setselectRepoCategory,
}: {
  repoCategories: RepoCategories;
  selectRepoCategory: SelectRepoCategory;
  setselectRepoCategory: SetSelectRepoCategory;
}) => {
  return (
    <ul className="fade-in-second my-10 flex flex-wrap items-center justify-center">
      {repoCategories.map((repoCategory: RepoCategory) => (
        <li
          key={repoCategory.id}
          className="hover:cursor-pointer mb-2 flex items-center justify-center"
        >
          <div
            onClick={() => setselectRepoCategory(repoCategory.name)}
            className={`text-black px-4 py-1 font-bold border border-black button-shadow ${
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
        </li>
      ))}
    </ul>
  );
};

export default GitHubRepoCategoryList;
