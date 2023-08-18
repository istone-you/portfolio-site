export interface Index {
  thumbnail: {
    url: string;
  };
  greeting: string;
  thanks: string;
  email: string;
  twitter: string;
  about: string;
  inquiry: string;
  twitterlogo: {
    url: string;
  };
}

export interface Page {
  id: string;
  path: string;
  title: string;
  detail: string;
}

export type Pages = Page[];
