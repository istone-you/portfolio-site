import { githubClient } from "../libs/client";
import Back from "@/components/common/Back";
import GitHubCategory from "@/components/github/GitHubCategory";

import type {
  AccountDataProps,
  RepoCategory,
  RepoData,
  RepoCategoryProps,
} from "@/types/github";

const github = ({
  accountUrl,
  repoCategory,
}: RepoCategoryProps & AccountDataProps) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Back />
        <div className="my-20">
          <h1 className="text-5xl mb-12 flex items-center justify-center">
            Github
          </h1>
          <p className="flex items-center justify-center">
            アカウントは<a href={accountUrl.url}>こちら</a>
          </p>
          <GitHubCategory repoCategory={repoCategory} />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const [accountUrl, repository, category] = await Promise.all([
    githubClient.get({ endpoint: "account" }),
    githubClient.get({ endpoint: "repo" }),
    githubClient.get({ endpoint: "category" }),
  ]);

  const repoCategory = category.contents.map((cat: RepoCategory) => ({
    name: cat.name,
    repository: repository.contents.filter(
      (repo: RepoData) => repo.category.name === cat.name
    ),
  }));

  return {
    props: {
      accountUrl,
      repoCategory,
    },
  };
};

export default github;
