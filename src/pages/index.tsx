import { Inter } from "next/font/google";
import { indexClient } from "../libs/client";
import Title from "@/components/index/Title";
import PageCard from "@/components/index/PageCard";
import Contact from "@/components/index/Contact";

import type { IndexDataProps, PagesDataProps } from "@/types/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  indexData,
  pagesData,
}: IndexDataProps & PagesDataProps) {
  return (
    <main>
      <div className="flex items-center justify-center">
        <div>
          <Title
            greeting={indexData.greeting}
            thanks={indexData.thanks}
            thumbnail={indexData.thumbnail}
          />
          <div className="lg:mx-24 xl:mx-72 flex flex-wrap tems-center justify-center">
            {pagesData.map((pagesData) => (
              <PageCard
                id={pagesData.id}
                path={pagesData.path}
                title={pagesData.title}
                detail={pagesData.detail}
                key={pagesData.id}
              />
            ))}
          </div>
          <Contact email={indexData.email} twitter={indexData.twitter} />
        </div>
      </div>
    </main>
  );
}

export const getStaticProps = async () => {
  const [indexData, pagesData] = await Promise.all([
    indexClient.get({ endpoint: "index" }),
    indexClient.get({ endpoint: "pages" }),
  ]);

  return {
    props: {
      indexData,
      pagesData: pagesData.contents,
    },
  };
};
