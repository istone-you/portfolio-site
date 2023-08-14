import Image from "next/image";

import type { RepoCategory, Repository } from "@/types/github";

const GitHubRepos = ({ repoCategory }: { repoCategory: RepoCategory }) => {
  return (
    <div className="mx-auto px-2 max-w-3xl">
      {repoCategory.repositories.map((repository: Repository) => (
        <div className="flex items-center justify-center" key={repository.id}>
          <div className="w-full my-6 py-8 px-6 sm:px-24 text-black bg-white border-2 border-black rounded-lg">
            <a href={repository.url}>
              <h1 className="sm:text-2xl flex items-center justify-center">
                {repository.title}
              </h1>
            </a>
            <div
              dangerouslySetInnerHTML={{
                __html: repository.detail,
              }}
              className="mt-6"
            />
            {repository.image ? (
              <div className="flex items-center justify-center">
                <Image
                  src={repository.image.url}
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GitHubRepos;
