import Image from "next/image";
import AccountLink from "@/components/common/AccountLink";
import ArticlesList from "@/components/article/ArticlesList";

import type { AccountUrl } from "@/types/common";
import type { Articles, SelectArticleCategory, SetSelectArticleCategory } from "@/types/article";

const ArticleCategoryTab = ({ articles, categories, qiitaAccountUrl, zennAccountUrl, selectArticleCategory, setSelectArticleCategory }: { articles: Articles, categories: string[], qiitaAccountUrl: AccountUrl, zennAccountUrl: AccountUrl, selectArticleCategory: SelectArticleCategory, setSelectArticleCategory: SetSelectArticleCategory }) => {
    return (
        <>
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
                            className={`${selectArticleCategory === categoriey
                                ? "pointer-events-none"
                                : "pointer-events-auto"
                                }  ${selectArticleCategory === categoriey
                                    ? "cursor-default"
                                    : "cursor-pointer"
                                } ${selectArticleCategory === categoriey ? "bg-black" : "text-black"
                                } ${selectArticleCategory === categoriey ? "text-white" : "bg-white"
                                } ${selectArticleCategory === categoriey
                                    ? "shadow-none translate-y-1 translate-x-1"
                                    : ""
                                } px-8 py-1 title-shadow`}
                        >
                            {categoriey.charAt(0).toUpperCase() + categoriey.slice(1).toLowerCase()}
                        </div>
                    </div>
                ))}
            </ul>

            {selectArticleCategory == "qiita" ? <AccountLink accountUrl={qiitaAccountUrl} /> : <AccountLink accountUrl={zennAccountUrl} />}

            <ArticlesList articles={articles} selectArticleCategory={selectArticleCategory} />
        </>
    )
}

export default ArticleCategoryTab