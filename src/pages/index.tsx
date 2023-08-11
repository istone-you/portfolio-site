import { Inter } from "next/font/google";
import { indexClient } from "../libs/client";
import Title from "@/components/index/Title";
import Card from "@/components/index/Card";
import Contact from "@/components/index/Contact";

const inter = Inter({ subsets: ["latin"] });

interface IndexData {
  thumbnail: {
    url: string;
  };
  greeting: string;
  thanks: string;
  email: string;
  twitter: string;
}

interface IndexDataProps {
  indexData: IndexData;
}

interface PagesData {
  id: string;
  path: string;
  title: string;
  detail: string;
}

interface PagesDataProps {
  pagesData: PagesData[];
}

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
          <div className="mx-80 flex flex-wrap tems-center justify-center">
            {pagesData.map((pagesData) => (
              <Card
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
