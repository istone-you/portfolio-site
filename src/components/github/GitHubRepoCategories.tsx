import GitHubRepos from "./GitHubRepos";

import type { RepoCategories, RepoCategory } from "@/types/github";

const GitHubRepoCategories = ({
  repoCategories,
}: {
  repoCategories: RepoCategories;
}) => {
  console.log(repoCategories);
  return (
    <>
      {repoCategories.map((repoCategory: RepoCategory) => (
        <div className="fade-in-second" key={repoCategory.name}>
          <h1 className="text-3xl mt-12 flex items-center justify-center">
            {repoCategory.name}
          </h1>
          <GitHubRepos repoCategory={repoCategory} />
        </div>
      ))}
    </>
  );
};

export default GitHubRepoCategories;
