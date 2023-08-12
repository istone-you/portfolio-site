import { githubClient } from "../libs/client";
import Back from "@/components/common/Back";
import PageTitle from "@/components/common/PageTitle";
import Account from "@/components/common/Account";
import GitHubCategory from "@/components/github/GitHubCategory";

import type {
  githubAccount,
  RepoCategory,
  Repository,
  RepoCategories,
} from "@/types/github";

const Github = ({
  githubAccount,
  repoCategories,
}: {
  githubAccount: githubAccount;
  repoCategories: RepoCategories;
}) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Back />
        <PageTitle title="GitHub" />
        <Account githubAccount={githubAccount} />
        <GitHubCategory repoCategories={repoCategories} />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const [githubAccount, repository, category] = await Promise.all([
    githubClient.get({ endpoint: "account" }),
    githubClient.get({ endpoint: "repo" }),
    githubClient.get({ endpoint: "category" }),
  ]);

  const repoCategories = category.contents.map((cat: RepoCategory) => ({
    name: cat.name,
    repositories: repository.contents.filter(
      (repo: Repository) => repo.category.name === cat.name
    ),
  }));

  return {
    props: {
      githubAccount: githubAccount.url,
      repoCategories,
    },
  };
};

export default Github;
