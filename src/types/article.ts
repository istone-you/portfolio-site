export interface ArticleInfo {
  qiita_url: string;
  zenn_url: string;
  explanation: string;
}

export interface ZennArticle {
  id: string;
  title: string;
  emoji: string;
  liked_count: number;
  path: string;
}

export type ZennArticles = ZennArticle[];

export interface QiitaArticle {
  id: string;
  title: string;
  likes_count: number;
  stocks_count: number;
  url: string;
}

export type QiitaArticles = QiitaArticle[];

export type SelectArticleCategory = string;
export type SetSelectArticleCategory = React.Dispatch<
  React.SetStateAction<string>
>;
