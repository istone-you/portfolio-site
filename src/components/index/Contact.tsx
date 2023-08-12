import Link from "next/link";

import type { ContactProps } from "@/types/index";

const Contact = (props: ContactProps) => {
  return (
    <div className="mt-20 flex items-center justify-center">
      <p className="">
        You can contact me via &nbsp;
        <a href={`mailto:${props.email}`}>Email</a>（{props.email}）,
        <a href={props.twitter}>Twitter&nbsp;</a>
        or this&nbsp;
        <Link href="/form">Form</Link>
      </p>
    </div>
  );
};

export default Contact;
