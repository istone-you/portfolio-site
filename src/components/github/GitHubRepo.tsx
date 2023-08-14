import Image from "next/image";

import type { Repository } from "@/types/github";

const GitHubRepo = ({ repository }: { repository: Repository }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="w-full my-6 py-8 px-6 sm:px-24 content-card"
        key={repository.id}
      >
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
            <Image src={repository.image.url} alt="" width={300} height={300} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GitHubRepo;
