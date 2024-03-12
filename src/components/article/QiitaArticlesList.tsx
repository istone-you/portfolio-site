import AccountLink from "@/components/common/AccountLink";

import type { QiitaArticles, QiitaArticle } from "@/types/article";

const QiitaArticlesList = ({
  qiitaArticles,
  accountUrl,
}: {
  qiitaArticles: QiitaArticles;
  accountUrl: string;
}) => {
  const sortedArticles = qiitaArticles.sort(
    (a, b) => b.likes_count - a.likes_count
  );

  return (
    <div className="mx-auto mb-4 px-2 max-w-3xl">
      <AccountLink accountUrl={accountUrl} />
      {sortedArticles.map((article: QiitaArticle) => (
        <div className="w-full center" key={article.id}>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="fade-in-second w-full my-6 py-14 px-6 sm:px-24 content-card no-underline"
          >
            <h1 className="text-xl center">{article.title}</h1>
            <div className="flex justify-center space-x-4">
              <p className="center">♡{article.likes_count}</p>
              <p className="center">★{article.stocks_count}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default QiitaArticlesList;
