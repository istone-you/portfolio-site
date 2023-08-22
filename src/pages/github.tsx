import { useState } from "react";
import { indexClient, githubClient } from "../libs/client";
import HomeButton from "@/components/common/HomeButton";
import PageTitle from "@/components/common/PageTitle";
import AccountLink from "@/components/common/AccountLink";
import GitHubCategoryTab from "@/components/github/GitHubCategoryTab";
import GitHubList from "@/components/github/GitHubList";

import type {
  RepoCategory,
  Repository,
  RepoCategories,
  LanguageRate,
} from "@/types/github";
import type { AccountUrl, HomeButtonUrl } from "@/types/common";
import GitHubLangRate from "@/components/github/GitHubLangRate";

const Github = ({
  githubAccountUrl,
  repoCategories,
  homeButtonUrl,
  langRate,
}: {
  githubAccountUrl: AccountUrl;
  repoCategories: RepoCategories;
  homeButtonUrl: HomeButtonUrl;
  langRate: LanguageRate;
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
        <GitHubLangRate langRate={langRate} />
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
  const langRateApiUrl = process.env.LANG_RATE_API_URL || ""
  const [githubAccount, repository, category, index, langRate] =
    await Promise.all([
      githubClient.get({ endpoint: "account" }),
      githubClient.get({ endpoint: "repo", queries: { limit: 100 } }),
      githubClient.get({ endpoint: "category" }),
      indexClient.get({ endpoint: "index" }),
      fetch(langRateApiUrl).then((res) => res.json()),
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
      homeButtonUrl: index.homebutton.url,
      langRate,
    },
  };
};

export default Github;
