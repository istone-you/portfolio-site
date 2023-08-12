import React from "react";

import { Company, Work } from "@/types/career";

const WorkContents = ({ company }: { company: Company }) => {
  return (
    <ul>
      {company.works.map((work: Work) => (
        <li key={work.id} className="list-none">
          <h2>◯{work.title}</h2>
          <div className="mb-4 mt-4 py-16 px-20 text-black bg-white border-2 dark:border-gray-700 rounded-lg">
            <p>
              期間：{work.period}
              <br />
              職種：{work.occupation}
            </p>
            <p>
              【概要】
              <br />
              {work.overview}
            </p>
            <div>
              【詳細】
              <br />
              <div
                className="prose"
                dangerouslySetInnerHTML={{
                  __html: `${work.detail}`,
                }}
              />
            </div>
            <div>
              【ポイント】
              <br />
              <div
                className="prose"
                dangerouslySetInnerHTML={{
                  __html: `${work.point}`,
                }}
              />
            </div>
            <p className="pt-6">
              【人数】
              <br />
              {work.number}人
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default WorkContents;
