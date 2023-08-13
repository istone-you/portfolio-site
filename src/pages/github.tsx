import { githubClient } from "../libs/client";
import Back from "@/components/common/Back";
import PageTitle from "@/components/common/PageTitle";
import AccountLink from "@/components/common/AccountLink";
import GitHubRepoCategoryList from "@/components/github/GitHubRepoCategoryList";
import GitHubRepoCategories from "@/components/github/GitHubRepoCategories";

import type { RepoCategory, Repository, RepoCategories } from "@/types/github";
import type { AccountUrl } from "@/types/common";

const Github = ({
  githubAccountUrl,
  repoCategories,
}: {
  githubAccountUrl: AccountUrl;
  repoCategories: RepoCategories;
}) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Back />
        <PageTitle title="GitHub" />
        <AccountLink accountUrl={githubAccountUrl} />
        <GitHubRepoCategoryList repoCategories={repoCategories} />
        <GitHubRepoCategories repoCategories={repoCategories} />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const [githubAccount, repository, category] = await Promise.all([
    githubClient.get({ endpoint: "account" }),
    githubClient.get({ endpoint: "repo", queries: { limit: 100 } }),
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
      githubAccountUrl: githubAccount.url,
      repoCategories,
    },
  };
};

export default Github;
