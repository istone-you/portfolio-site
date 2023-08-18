import Link from "next/link";
import Image from "next/image";

import type { Index } from "@/types/index";

const Contact = ({ index }: { index: Index }) => {
  return (
    <div className="fade-in-third mt-16 mb-2 mx-auto px-4 center">
      <div>
        <p className="font-bold center">You can contact me via</p>
        <div className="center-wrap">
          <div>
            <a href={`mailto:${index.email}`} className="no-underline group">
              <div className="mb-3 mr-2 px-4 py-1 button-shadow">Email</div>
            </a>
          </div>
          <Link href="/inquiry" className="no-underline group">
            <div className="mb-3 mr-2 px-4 py-1 button-shadow">
              Inquiry Form
            </div>
          </Link>
          <a
            href={index.twitter}
            className="no-underline group"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <div className="mb-3 mr-2 px-4 py-2 button-shadow ">
              {/* &nbsp;X&nbsp; */}
              <Image
                src={index.twitterlogo.url}
                alt="twitter"
                width={21}
                height={21}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
