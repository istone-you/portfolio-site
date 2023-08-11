import { careerClient } from "../libs/client";
import Back from "@/components/common/Back";
import CareerContent from "@/components/career/CareerContent";

interface Work {
  id: string;
  title: string;
  period: string;
  occupation: string;
  overview: string;
  detail: string;
  point: string;
  number: number;
}

interface CarrerData {
  id: string;
  name: string;
  period: string;
  works: Work[];
}

interface CarrerDatas {
  contents: CarrerData[];
}

const career = ({ contents }: CarrerDatas) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Back />
        <div className="mx-56 my-28">
          <h1 className="text-5xl mb-12 flex items-center justify-center">
            Career
          </h1>
          {contents.map((content) => (
            <CareerContent content={content} key={content.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await careerClient.get({
    endpoint: "company",
    queries: { limit: 100 },
  });
  return {
    props: {
      contents: data.contents,
    },
  };
};

export default career;
