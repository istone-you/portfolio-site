import React from "react";
import WorkContents from "./WorkContents";

import type { Companies, Company } from "@/types/career";

const CareerContents = ({ companies }: { companies: Companies }) => {
  return (
    <ul>
      {companies.map((company: Company) => (
        <div className="fade-in-second mt-10" key={company.id}>
          <div className="flex items-center justify-center">
            <div>
              <h1 className="mx-6 px-10 py-2 title-shadow text-xl flex items-center justify-center">
                {company.name}
              </h1>
              <p className="flex items-center justify-center">
                {company.period}
              </p>
            </div>
          </div>
          <WorkContents company={company} />
        </div>
      ))}
    </ul>
  );
};

export default CareerContents;
