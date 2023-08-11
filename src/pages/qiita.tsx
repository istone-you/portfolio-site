import { qiitaClient } from "../libs/client";
import QiitaArticle from "@/components/qiita/QiitaArticle";

interface AccountData {
  url: string;
}

interface AccountDataProps {
  accountUrl: AccountData;
}

interface ArticleData {
  id: string;
  title: string;
  detail: string;
  url: string;
  comment: number | null;
}

interface ArticleDataProps {
  articleData: ArticleData[];
}

const qiita = ({
  accountUrl,
  articleData,
}: AccountDataProps & ArticleDataProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="mx-64 my-28">
        <h1 className="text-5xl mb-12 flex items-center justify-center">
          Qiita
        </h1>
        {articleData.map((articleData) => (
          <QiitaArticle
            title={articleData.title}
            detail={articleData.detail}
            url={articleData.url}
            comment={articleData.comment}
            key={articleData.id}
          />
        ))}
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
