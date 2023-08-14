import { useState } from "react";
import { githubClient } from "../libs/client";
import HomeButton from "@/components/common/HomeButton";
import PageTitle from "@/components/common/PageTitle";
import AccountLink from "@/components/common/AccountLink";
import GitHubCategoryTab from "@/components/github/GitHubCategoryTab";
import GitHubList from "@/components/github/GitHubList";

import type { RepoCategory, Repository, RepoCategories } from "@/types/github";
import type { AccountUrl } from "@/types/common";

const Github = ({
  githubAccountUrl,
  repoCategories,
}: {
  githubAccountUrl: AccountUrl;
  repoCategories: RepoCategories;
}) => {
  const [selectRepoCategory, setselectRepoCategory] = useState(
    repoCategories[0].name
  );

  return (
    <div className="flex items-center justify-center">
      <div>
        <HomeButton />
        <PageTitle title="GitHub" />
        <AccountLink accountUrl={githubAccountUrl} />
        <GitHubCategoryTab
          repoCategories={repoCategories}
          selectRepoCategory={selectRepoCategory}
          setselectRepoCategory={setselectRepoCategory}
        />
        <GitHubList
          repoCategories={repoCategories}
          selectRepoCategory={selectRepoCategory}
        />
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
