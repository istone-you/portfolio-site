import AccountLink from "@/components/common/AccountLink";

import type { ZennArticles, ZennArticle } from "@/types/article";

const ZennArticlesList = ({
  zennArticles,
  accountUrl,
}: {
  zennArticles: ZennArticles;
  accountUrl: string;
}) => {
  const sortedArticles = zennArticles.sort(
    (a, b) => b.liked_count - a.liked_count
  );

  return (
    <div className="mx-auto mb-4 px-2 max-w-3xl">
      <AccountLink accountUrl={accountUrl} />
      {sortedArticles.map((article: ZennArticle) => (
        <div className="w-full center" key={article.id}>
          <a
            href={`https://zenn.dev/${article.path}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="fade-in-second w-full my-6 py-14 px-6 sm:px-24 content-card no-underline"
          >
            <p className="center text-4xl">{article.emoji}</p>
            <h1 className="text-xl center">{article.title}</h1>
            <p className="center">♡{article.liked_count}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ZennArticlesList;
