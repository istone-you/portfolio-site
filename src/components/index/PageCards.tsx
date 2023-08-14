import Link from "next/link";

import type { Pages, Page } from "@/types/index";

const PageCards = ({ pages }: { pages: Pages }) => {
  return (
    <div className="mx-auto max-w-3xl center-wrap">
      {pages.map((page: Page) => (
        <div className="fade-in-second px-12" key={page.id}>
          <Link href={page.path} className="no-underline">
            <div className="mb-1 mt-10 mx-auto py-4 px-10 h-32 w-72 index-card">
              <p>
                <span className="text-lg">{page.title}</span>
                <br />
                <span className="text-sm font-normal">{page.detail}</span>
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PageCards;
