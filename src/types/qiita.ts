export interface Article {
  id: string;
  title: string;
  detail: string;
  image: {
    url: string;
  };
  url: string;
  comment: number | null;
}

export type Articles = Article[];
