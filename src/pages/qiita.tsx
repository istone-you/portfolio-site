import { qiitaClient } from "../libs/client";
import Back from "@/components/common/Back";
import PageTitle from "@/components/common/PageTitle";
import Account from "@/components/common/Account";
import QiitaArticle from "@/components/qiita/QiitaArticle";

import type { AccountDataProps, ArticleDatas } from "@/types/qiita";
import { ArticleData } from "../types/qiita";

const Qiita = ({
  accountUrl,
  articleDatas,
}: AccountDataProps & ArticleDatas) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Back />
        <PageTitle title="Qiita" />
        <Account accountUrl={accountUrl} />
        {articleDatas.map((articleData) => (
          <QiitaArticle key={articleData.id} articleData={articleData} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const [accountUrl, articleDatas] = await Promise.all([
    qiitaClient.get({ endpoint: "account" }),
    qiitaClient.get({ endpoint: "article" }),
  ]);

  return {
    props: {
      accountUrl,
      articleDatas: articleDatas.contents,
    },
  };
};

export default Qiita;
