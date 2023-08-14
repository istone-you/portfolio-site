import GitHubRepo from "./GitHubRepo";

import type {
  RepoCategories,
  RepoCategory,
  Repository,
  SelectRepoCategory,
} from "@/types/github";

const GitHubList = ({
  repoCategories,
  selectRepoCategory,
}: {
  repoCategories: RepoCategories;
  selectRepoCategory: SelectRepoCategory;
}) => {
  return (
    <>
      {repoCategories.map((repoCategory: RepoCategory) => (
        <div key={repoCategory.name}>
          {selectRepoCategory == repoCategory.name && (
            <div
              className="fade-in-second"
              key={repoCategory.name}
              id={repoCategory.name}
            >
              <div className="mx-auto px-2 max-w-3xl">
                {repoCategory.repositories.map((repository: Repository) => (
                  <div key={repository.id}>
                    <GitHubRepo repository={repository} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default GitHubList;
