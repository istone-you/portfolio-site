import Image from "next/image";
import { ArticleData } from "@/types/qiita";

import type { QiitaArticleProps } from "@/types/qiita";

const QiitaArticle = ({ articleData }: QiitaArticleProps) => {
  return (
    <div className="fade-in-second flex items-center justify-center">
      <div>
        <div
          className="my-6 py-14 px-24 text-black bg-white border-2 border-gray-200 rounded-lg dark:border-gray-700"
          style={{ width: 800 }}
        >
          <a href={articleData.url}>
            <h1 className="text-xl flex items-center justify-center">
              {articleData.title}
            </h1>
          </a>
          <div
            dangerouslySetInnerHTML={{
              __html: articleData.detail,
            }}
            className="mt-4 font-normal"
          />
          <div className="flex items-center justify-center">
            <Image
              src={articleData.image.url}
              alt=""
              width={300}
              height={300}
            />
          </div>
          {articleData.comment ? (
            <div className="mt-10 flex items-center justify-center bg-white border-2 border-gray-200 rounded-lg dark:border-gray-700">
              <div
                dangerouslySetInnerHTML={{
                  __html: articleData.comment,
                }}
                className="my-10 font-normal"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default QiitaArticle;
