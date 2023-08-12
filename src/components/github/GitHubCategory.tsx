import GitHubRepo from "./GitHubRepo";

import type { RepoCategories, RepoCategory } from "@/types/github";

const GitHubCategory = ({
  repoCategories,
}: {
  repoCategories: RepoCategories;
}) => {
  console.log(repoCategories);
  return (
    <>
      {repoCategories.map((repoCategory) => (
        <div className="fade-in-second" key={repoCategory.name}>
          <h1 className="text-3xl mt-12 flex items-center justify-center">
            {repoCategory.name}
          </h1>
          <GitHubRepo repoCategory={repoCategory} />
        </div>
      ))}
    </>
  );
};

export default GitHubCategory;
