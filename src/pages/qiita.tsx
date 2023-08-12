import { qiitaClient } from "../libs/client";
import Back from "@/components/common/Back";
import QiitaArticle from "@/components/qiita/QiitaArticle";

import { AccountDataProps, ArticleDataProps } from "@/types/qiita";

const qiita = ({
  accountUrl,
  articleData,
}: AccountDataProps & ArticleDataProps) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Back />
        <div className="my-20">
          <h1 className="text-5xl mb-12 flex items-center justify-center">
            Qiita
          </h1>
          <p className="flex items-center justify-center">
            アカウントは<a href={accountUrl.url}>こちら</a>
          </p>
          {articleData.map((articleData) => (
            <QiitaArticle
              id={articleData.id}
              title={articleData.title}
              detail={articleData.detail}
              image={articleData.image}
              url={articleData.url}
              comment={articleData.comment}
              key={articleData.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const [accountUrl, articleData] = await Promise.all([
    qiitaClient.get({ endpoint: "account" }),
    qiitaClient.get({ endpoint: "article" }),
  ]);

  return {
    props: {
      accountUrl,
      articleData: articleData.contents,
    },
  };
};

export default qiita;
