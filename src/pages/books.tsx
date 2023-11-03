import { indexClient, booksClient } from "../libs/client";
import HomeButton from "@/components/common/HomeButton";
import PageTitle from "@/components/common/PageTitle";
import BooksContents from "@/components/books/BooksContents";

import type { Book, Books } from "@/types/books";
import type { HomeButtonUrl } from "@/types/common";

const books = ({
  books,
  homeButtonUrl,
}: {
  books: Books;
  homeButtonUrl: HomeButtonUrl;
}) => {
  return (
    <div className="center">
      <div>
        <HomeButton homeButtonUrl={homeButtonUrl} />
        <PageTitle title="Publication" />
        <BooksContents books={books} />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const [books, index] = await Promise.all([
    booksClient.get({ endpoint: "books" }),
    indexClient.get({ endpoint: "index" }),
  ]);

  return {
    props: {
      books: books.contents,
      homeButtonUrl: index.homebutton.url,
    },
  };
};

export default books;
