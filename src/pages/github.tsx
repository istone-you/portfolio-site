import { useState } from "react";
import { indexClient } from "../libs/client";
import { githubClient } from "../libs/client";
import HomeButton from "@/components/common/HomeButton";
import PageTitle from "@/components/common/PageTitle";
import AccountLink from "@/components/common/AccountLink";
import GitHubCategoryTab from "@/components/github/GitHubCategoryTab";
import GitHubList from "@/components/github/GitHubList";

import type { RepoCategory, Repository, RepoCategories } from "@/types/github";
import type { AccountUrl, HomeButtonUrl } from "@/types/common";

const Github = ({
  githubAccountUrl,
  repoCategories,
  homeButtonUrl,
}: {
  githubAccountUrl: AccountUrl;
  repoCategories: RepoCategories;
  homeButtonUrl: HomeButtonUrl;
}) => {
  const [selectRepoCategory, setselectRepoCategory] = useState(
    repoCategories[0].name
  );

  return (
    <div className="center">
      <div>
        <HomeButton homeButtonUrl={homeButtonUrl} />
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
  const index = await indexClient.get({ endpoint: "index" });

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
      homeButtonUrl: index.homebutton.url,
    },
  };
};

export default Github;
