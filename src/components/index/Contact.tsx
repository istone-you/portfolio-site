import Link from "next/link";

import type { Index } from "@/types/index";

const Contact = ({ index }: { index: Index }) => {
  return (
    <div className="fade-in-third mt-20 mx-auto px-4 flex items-center justify-center">
      <div>
        <p className="flex items-center justify-center">
          You can contact me via &nbsp;
        </p>
        <div className="flex flex-wrap">
          <a href={`mailto:${index.email}`} className="no-underline">
            <div className="mr-2 px-4 py-1 button-shadow -translate-y-1">
              Email
            </div>
          </a>
          <a href={index.twitter} className="no-underline">
            <div className="mr-2 px-4 py-1 button-shadow -translate-y-1">
              Twitter&nbsp;
            </div>
          </a>
          <Link href="/inquiry" className="no-underline">
            <div className="mr-2 px-4 py-1 button-shadow -translate-y-1">
              Inquiry Form
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
