import Image from "next/image";

import type { RepoCategory } from "@/types/github";

const GitHubRepo = ({ repoCategory }: { repoCategory: RepoCategory }) => {
  return (
    <div>
      {repoCategory.repositories.map((repository) => (
        <div className="flex items-center justify-center" key={repository.id}>
          <div>
            <div
              className="my-6 py-8 px-24 text-black bg-white border-2 border-gray-200 rounded-lg dark:border-gray-700"
              style={{ width: 800 }}
            >
              <a href={repository.url}>
                <h1 className="text-2xl flex items-center justify-center">
                  {repository.title}
                </h1>
              </a>
              <div
                dangerouslySetInnerHTML={{
                  __html: repository.detail,
                }}
                className="mt-6 font-normal"
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
        </div>
      ))}
    </div>
  );
};

export default GitHubRepo;
