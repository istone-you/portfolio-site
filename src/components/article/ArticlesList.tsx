import Image from "next/image";

import type { Articles, Article, SelectArticleCategory } from "@/types/article";

const ArticlesList = ({ articles, selectArticleCategory }: { articles: Articles, selectArticleCategory: SelectArticleCategory }) => {
  return (
    <div className="mx-auto mb-4 px-2 max-w-3xl">
      {articles.map((article: Article) => (
        <div className="w-full center" key={article.id}>
          {article.category[0] === selectArticleCategory && (
            <div className="fade-in-second w-full my-6 py-14 px-6 sm:px-24 content-card">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <h1 className="text-xl center">{article.title}</h1>
              </a>
              {article.detail ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: article.detail,
                  }}
                  className="mt-4 font-normal"
                />
              ) : null}
              {article.image ? (
                <div className="center">
                  <Image src={article.image.url} alt="" width={300} height={300} />
                </div>
              ) : null}
              {article.comment ? (
                <div className="mt-10 center content-card">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: article.comment,
                    }}
                    className="mx-4 my-10 font-normal"
                  />
                </div>
              ) : null}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
