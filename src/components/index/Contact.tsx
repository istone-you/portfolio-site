import Link from "next/link";

import type { Index } from "@/types/index";

const Contact = ({ index }: { index: Index }) => {
  return (
    <div className="fade-in-third mt-20 mx-8 flex items-center justify-center">
      <div className="flex flex-wrap">
        <p>You can contact me via &nbsp;</p>
        <a href={`mailto:${index.email}`} className="hover:no-underline">
          <div className="mr-2 px-4 py-1 button-shadow -translate-y-1">
            Email
          </div>
        </a>
        <p>or&nbsp;</p>
        <a href={index.twitter} className="hover:no-underline">
          <div className="mr-2 px-4 py-1 button-shadow -translate-y-1">
            Twitter&nbsp;
          </div>
        </a>
        <p>or&nbsp;</p>
        <Link href="/inquiry" className="hover:no-underline">
          <div className="mr-2 px-4 py-1 button-shadow -translate-y-1">
            Inquiry Form
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
