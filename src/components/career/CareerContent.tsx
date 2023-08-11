import React from "react";
import WorkContent from "./WorkContent";

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

interface CareerContentProps {
  content: CarrerData;
}

const CareerContents = (props: CareerContentProps) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div>
          <h1 className="text-2xl flex items-center justify-center">
            {props.content.name}
          </h1>
          <p className="flex items-center justify-center">
            {props.content.period}
          </p>
        </div>
      </div>
      <ul>
        {props.content.works.map((work) => (
          <WorkContent work={work} key={work.id} />
        ))}
      </ul>
    </div>
  );
};

export default CareerContents;
