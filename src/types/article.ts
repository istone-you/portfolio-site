export interface Article {
  id: string;
  title: string;
  detail: string;
  image: {
    url: string;
  };
  url: string;
  comment: number | null;
  category: string[]
}

export type Articles = Article[];

export type SelectArticleCategory = string;
export type SetSelectArticleCategory = React.Dispatch<React.SetStateAction<string>>;