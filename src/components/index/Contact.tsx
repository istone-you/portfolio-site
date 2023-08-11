import React from "react";

interface ContactData {
  email: string;
  twitter: string;
}

const Contact = (props: ContactData) => {
  return (
    <div className="mt-12 flex items-center justify-center">
      <p className="">
        My email adress is&nbsp;
        <a href={`mailto:${props.email}`}>{props.email}&nbsp;</a>
        or find me on&nbsp;
        <a href={props.twitter}>Twitter</a>
      </p>
    </div>
  );
};

export default Contact;
