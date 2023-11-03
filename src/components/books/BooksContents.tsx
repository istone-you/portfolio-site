import Image from "next/image";

import type { Book, Books } from "@/types/books";

const BooksContents = ({ books }: { books: Books }) => {
  return (
    <div className="fade-in-second my-20 px-8 sm:px-20 font-bold">
      {books.map((book: Book) => (
        <div key={book.id}>
          <div className="center">
            <Image src={book.display.url} alt="" width={200} height={200} />
          </div>
          <h1 className="center text-2xl mt-8">{book.title}</h1>
          <div
            className="prose mt-10"
            dangerouslySetInnerHTML={{
              __html: `${book.description}`,
            }}
          />
          <div className="center-wrap pt-4">
            <a
              href={book.kindle}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="no-underline group"
            >
              <div className="mx-1 px-3 py-0.5 button-shadow">Amazon</div>
            </a>
            <a
              href={book.rakuten}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="no-underline group"
            >
              <div className="mx-1 px-3 py-0.5 button-shadow">楽天</div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksContents;
