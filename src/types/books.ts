export interface Book {
  id: string;
  title: string;
  description: string;
  display: {
    url: string;
  };
  kindle: string;
  rakuten: string;
}

export type Books = Book[];
