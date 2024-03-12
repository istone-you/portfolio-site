import axios from "axios";
import { useState } from "react";
import { indexClient } from "../libs/client";
import { articleClient } from "../libs/client";
import HomeButton from "@/components/common/HomeButton";
import PageTitle from "@/components/common/PageTitle";
import ArticleCategoryTab from "@/components/article/ArticleCategoryTab";

import type { ZennArticles, QiitaArticles } from "@/types/article";
import type { AccountUrl, HomeButtonUrl } from "@/types/common";

const Article = ({
  qiitaAccountUrl,
  zennAccountUrl,
  zennArticles,
  qiitaArticles,
  homeButtonUrl,
}: {
  qiitaAccountUrl: AccountUrl;
  zennAccountUrl: AccountUrl;
  zennArticles: ZennArticles;
  qiitaArticles: QiitaArticles;
  homeButtonUrl: HomeButtonUrl;
}) => {
  const [selectArticleCategory, setSelectArticleCategory] = useState("qiita");
  return (
    <div className="center">
      <div>
        <HomeButton homeButtonUrl={homeButtonUrl} />
        <PageTitle title="Article" />
        <ArticleCategoryTab
          zennArticles={zennArticles}
          qiitaArtilces={qiitaArticles}
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
  const qiitaToken = process.env.QIITA_TOKEN;

  const [account, zennArticles, qiitaArticles, index] = await Promise.all([
    articleClient.get({ endpoint: "account" }),
    axios.get("https://zenn.dev/api/articles?username=istone"),
    axios.get("https://qiita.com/api/v2/users/istone/items", {
      headers: {
        Authorization: `Bearer ${qiitaToken}`,
      },
    }),
    indexClient.get({ endpoint: "index" }),
  ]);

  return {
    props: {
      qiitaAccountUrl: account.qiita_url,
      zennAccountUrl: account.zenn_url,
      zennArticles: zennArticles.data.articles,
      qiitaArticles: qiitaArticles.data,
      homeButtonUrl: index.homebutton.url,
    },
  };
};

export default Article;
