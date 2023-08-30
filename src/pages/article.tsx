import { useState } from "react";
import { indexClient } from "../libs/client";
import { articleClient } from "../libs/client";
import HomeButton from "@/components/common/HomeButton";
import PageTitle from "@/components/common/PageTitle";
import ArticleCategoryTab from "@/components/article/ArticleCategoryTab";

import type { Articles } from "@/types/article";
import type { AccountUrl, HomeButtonUrl } from "@/types/common";

const Article = ({
  qiitaAccountUrl,
  zennAccountUrl,
  articles,
  homeButtonUrl,
}: {
  qiitaAccountUrl: AccountUrl;
  zennAccountUrl: AccountUrl;
  articles: Articles;
  homeButtonUrl: HomeButtonUrl;
}) => {
  const [selectArticleCategory, setSelectArticleCategory] = useState("qiita");
  return (
    <div className="center">
      <div>
        <HomeButton homeButtonUrl={homeButtonUrl} />
        <PageTitle title="Article" />
        <ArticleCategoryTab
          articles={articles}
          categories={["qiita", "zenn"]}
          qiitaAccountUrl={qiitaAccountUrl}
          zennAccountUrl={zennAccountUrl}
          selectArticleCategory={selectArticleCategory}
          setSelectArticleCategory={setSelectArticleCategory}
        />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const [account, articles, index] = await Promise.all([
    articleClient.get({ endpoint: "account" }),
    articleClient.get({ endpoint: "article", queries: { limit: 100 } }),
    indexClient.get({ endpoint: "index" }),
  ]);

  return {
    props: {
      qiitaAccountUrl: account.qiita_url,
      zennAccountUrl: account.zenn_url,
      articles: articles.contents,
      homeButtonUrl: index.homebutton.url,
    },
  };
};

export default Article;
