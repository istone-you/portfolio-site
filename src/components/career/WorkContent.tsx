import React from "react";

import { WorkProps } from "@/types/career";

const WorkContent = (props: WorkProps) => {
  return (
    <li key={props.work.id} className="list-none">
      <h2>◯{props.work.title}</h2>
      <div className="mb-4 mt-4 py-16 px-20 text-black bg-white border-2 dark:border-gray-700 rounded-lg">
        <p>
          期間：{props.work.period}
          <br />
          職種：{props.work.occupation}
        </p>
        <p>
          【概要】
          <br />
          {props.work.overview}
        </p>
        <div>
          【詳細】
          <br />
          <div
            className="prose"
            dangerouslySetInnerHTML={{
              __html: `${props.work.detail}`,
            }}
          />
        </div>
        <div>
          【ポイント】
          <br />
          <div
            className="prose"
            dangerouslySetInnerHTML={{
              __html: `${props.work.point}`,
            }}
          />
        </div>
        <p className="pt-6">
          【人数】
          <br />
          {props.work.number}人
        </p>
      </div>
    </li>
  );
};

export default WorkContent;
