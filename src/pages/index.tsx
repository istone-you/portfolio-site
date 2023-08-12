import { Inter } from "next/font/google";
import { indexClient } from "../libs/client";
import Title from "@/components/index/Title";
import PageCard from "@/components/index/PageCard";
import Contact from "@/components/index/Contact";

import type { IndexProps, Pages } from "@/types/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ index, pages }: IndexProps & Pages) {
  return (
    <main>
      <div className="flex items-center justify-center">
        <div>
          <Title index={index} />
          <div className="lg:mx-24 xl:mx-72 flex flex-wrap tems-center justify-center">
            {pages.map((page) => (
              <PageCard key={page.id} page={page} />
            ))}
          </div>
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
