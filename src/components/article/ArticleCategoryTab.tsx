import ZennArticlesList from "@/components/article/ZennArticlesList";
import QiitaArticlesList from "@/components/article/QiitaArticlesList";

import type {
  ArticleInfo,
  ZennArticles,
  QiitaArticles,
  SelectArticleCategory,
  SetSelectArticleCategory,
} from "@/types/article";

const ArticleCategoryTab = ({
  zennArticles,
  qiitaArtilces,
  categories,
  articleInfo,
  selectArticleCategory,
  setSelectArticleCategory,
}: {
  zennArticles: ZennArticles;
  qiitaArtilces: QiitaArticles;
  categories: string[];
  articleInfo: ArticleInfo;
  selectArticleCategory: SelectArticleCategory;
  setSelectArticleCategory: SetSelectArticleCategory;
}) => {
  return (
    <>
      <p className="fade-in-second font-bold mb-4 center">
        {articleInfo.explanation}
      </p>
      <ul className="fade-in-second mb-12 center-wrap">
        {categories.map((categoriey) => (
          <div key={categoriey} className="mx-2 my-2">
            <div
              onClick={() => setSelectArticleCategory(categoriey)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectArticleCategory(categoriey);
                }
              }}
              role="button"
              tabIndex={0}
              className={`${
                selectArticleCategory === categoriey
                  ? "pointer-events-none"
                  : "pointer-events-auto"
              }  ${
                selectArticleCategory === categoriey
                  ? "cursor-default"
                  : "cursor-pointer"
              } ${
                selectArticleCategory === categoriey ? "bg-black" : "text-black"
              } ${
                selectArticleCategory === categoriey ? "text-white" : "bg-white"
              } ${
                selectArticleCategory === categoriey
                  ? "shadow-none translate-y-1 translate-x-1"
                  : ""
              } px-8 py-1 title-shadow`}
            >
              {categoriey.charAt(0).toUpperCase() +
                categoriey.slice(1).toLowerCase()}
            </div>
          </div>
        ))}
      </ul>

      {selectArticleCategory == "qiita" ? (
        <QiitaArticlesList
          qiitaArticles={qiitaArtilces}
          accountUrl={articleInfo.qiita_url}
        />
      ) : (
        <ZennArticlesList
          zennArticles={zennArticles}
          accountUrl={articleInfo.zenn_url}
        />
      )}
    </>
  );
};

export default ArticleCategoryTab;
