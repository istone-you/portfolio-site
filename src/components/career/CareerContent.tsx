import React from "react";
import WorkContent from "./WorkContent";

import { CareerContentProps } from "@/types/career";

const CareerContents = ({ carrerData }: CareerContentProps) => {
  return (
    <div className="fade-in-second">
      <div className="flex items-center justify-center">
        <div>
          <h1 className="text-2xl flex items-center justify-center">
            {carrerData.name}
          </h1>
          <p className="flex items-center justify-center">
            {carrerData.period}
          </p>
        </div>
      </div>
      <ul>
        {carrerData.works.map((work) => (
          <WorkContent work={work} key={work.id} />
        ))}
      </ul>
    </div>
  );
};

export default CareerContents;
