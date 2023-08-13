import React from "react";
import WorkContents from "./WorkContents";

import type { Companies, Company } from "@/types/career";

const CareerContents = ({ companies }: { companies: Companies }) => {
  return (
    <ul>
      {companies.map((company: Company) => (
        <li className="fade-in-second mt-10 list-none" key={company.id}>
          <div className="flex items-center justify-center">
            <div>
              <h1 className="px-10 py-2 button-shadow border border-black text-2xl flex items-center justify-center">
                {company.name}
              </h1>
              <p className="flex items-center justify-center">
                {company.period}
              </p>
            </div>
          </div>
          <WorkContents company={company} />
        </li>
      ))}
    </ul>
  );
};

export default CareerContents;
