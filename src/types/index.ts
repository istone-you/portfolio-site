import PageCard from "../components/index/PageCard";
export interface Index {
  thumbnail: {
    url: string;
  };
  greeting: string;
  thanks: string;
  email: string;
  twitter: string;
  about: string;
}

export interface Page {
  id: string;
  path: string;
  title: string;
  detail: string;
}

export interface Pages {
  pages: Page[];
}

export interface IndexProps {
  index: Index;
}

export interface PageCardProps {
  page: Page;
}
