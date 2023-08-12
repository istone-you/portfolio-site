import GitHubRepo from "./GitHubRepo";

import type { RepoCategoryProps } from "@/types/github";

const GitHubCategory = (props: RepoCategoryProps) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        {props.repoCategory.map((repoCategory) => (
          <div key={repoCategory.name}>
            <h1 className="text-3xl mt-12 flex items-center justify-center">
              {repoCategory.name}
            </h1>
            {repoCategory.repository.map((repoData) => (
              <GitHubRepo
                key={repoData.id}
                id={repoData.id}
                title={repoData.title}
                detail={repoData.detail}
                image={repoData.image}
                url={repoData.url}
                category={repoData.category}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubCategory;
