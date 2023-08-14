import React from "react";

import { Company, Work } from "@/types/career";

const WorkContents = ({ company }: { company: Company }) => {
  return (
    <ul>
      {company.works.map((work: Work) => (
        <div key={work.id} className="mt-10">
          <div className="mb-4 mt-4 py-16 px-8 sm:px-20 text-black bg-white border-2 border-black rounded-lg">
            <h2 className="mb-10 center">
              <b>{work.title}</b>
            </h2>
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
        </div>
      ))}
    </ul>
  );
};

export default WorkContents;
