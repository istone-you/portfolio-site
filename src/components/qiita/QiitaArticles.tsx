import Image from "next/image";

import type { Articles, Article } from "@/types/qiita";

const QiitaArticles = ({ articles }: { articles: Articles }) => {
  return (
    <div className="mx-auto px-2 max-w-3xl">
      {articles.map((article: Article) => (
        <div
          className="fade-in-second w-full flex items-center justify-center"
          key={article.id}
        >
          <div className="my-6 py-14 px-6 sm:px-24 text-black bg-white border-2 border-black rounded-lg">
            <a href={article.url}>
              <h1 className="text-xl flex items-center justify-center">
                {article.title}
              </h1>
            </a>
            <div
              dangerouslySetInnerHTML={{
                __html: article.detail,
              }}
              className="mt-4 font-normal"
            />
            <div className="flex items-center justify-center">
              <Image src={article.image.url} alt="" width={300} height={300} />
            </div>
            {article.comment ? (
              <div className="mt-10 flex items-center justify-center bg-white border-2 border-gray-200 rounded-lg dark:border-gray-700">
                <div
                  dangerouslySetInnerHTML={{
                    __html: article.comment,
                  }}
                  className="mx-4 my-10 font-normal"
                />
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QiitaArticles;
