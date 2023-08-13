import GitHubRepos from "./GitHubRepos";

import type {
  RepoCategories,
  RepoCategory,
  SelectRepoCategory,
} from "@/types/github";

const GitHubRepoCategories = ({
  repoCategories,
  selectRepoCategory,
}: {
  repoCategories: RepoCategories;
  selectRepoCategory: SelectRepoCategory;
}) => {
  return (
    <>
      {repoCategories.map((repoCategory: RepoCategory) => (
        <>
          {selectRepoCategory == repoCategory.name && (
            <div
              className="fade-in-second"
              key={repoCategory.name}
              id={repoCategory.name}
            >
              <GitHubRepos repoCategory={repoCategory} />
            </div>
          )}
        </>
      ))}
    </>
  );
};

export default GitHubRepoCategories;
