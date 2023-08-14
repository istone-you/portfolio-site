import React from "react";

interface PageTitleProps {
  title: string;
}

const PageTitle = (props: PageTitleProps) => {
  return (
    <h1 className="fade-in-first text-5xl mt-16 mb-12 center">{props.title}</h1>
  );
};

export default PageTitle;
