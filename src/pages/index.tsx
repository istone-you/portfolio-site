import { Inter } from "next/font/google";
import { indexClient } from "../libs/client";
import Title from "@/components/index/Title";
import PageCards from "@/components/index/PageCards";
import Contact from "@/components/index/Contact";

import type { Index, Pages, Page } from "@/types/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ index, pages }: { index: Index; pages: Pages }) {
  return (
    <main>
      <div className="center">
        <div>
          <Title index={index} />
          <PageCards pages={pages} />
          <Contact index={index} />
        </div>
      </div>
    </main>
  );
}

export const getStaticProps = async () => {
  const [index, pages] = await Promise.all([
    indexClient.get({ endpoint: "index" }),
    indexClient.get({ endpoint: "pages" }),
  ]);

  return {
    props: {
      index,
      pages: pages.contents,
    },
  };
};
