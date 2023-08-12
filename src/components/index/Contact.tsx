import Link from "next/link";

import type { Index } from "@/types/index";

const Contact = ({ index }: { index: Index }) => {
  return (
    <div className="fade-in-third mt-20 flex items-center justify-center">
      <p className="">
        You can contact me via &nbsp;
        <a href={`mailto:${index.email}`}>Email</a>（{index.email}）,
        <a href={index.twitter}>Twitter&nbsp;</a>
        or this&nbsp;
        <Link href="/form">Form</Link>
      </p>
    </div>
  );
};

export default Contact;
