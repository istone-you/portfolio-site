export interface AccountData {
  url: string;
}

export interface AccountDataProps {
  accountUrl: AccountData;
}

export interface ArticleData {
  id: string;
  title: string;
  detail: string;
  image: {
    url: string;
  };
  url: string;
  comment: number | null;
}

export interface ArticleDatas {
  articleDatas: ArticleData[];
}

export interface QiitaArticleProps {
  articleData: ArticleData;
}
