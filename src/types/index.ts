export interface IndexData {
  thumbnail: {
    url: string;
  };
  greeting: string;
  thanks: string;
  email: string;
  twitter: string;
}

export interface IndexDataProps {
  indexData: IndexData;
}

export interface PagesData {
  id: string;
  path: string;
  title: string;
  detail: string;
}

export interface PagesDataProps {
  pagesData: PagesData[];
}

export interface ContactProps {
  email: string;
  twitter: string;
}

export interface TitleProps {
  thumbnail: {
    url: string;
  };
  greeting: string;
  thanks: string;
}
