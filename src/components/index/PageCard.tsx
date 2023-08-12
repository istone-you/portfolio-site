import Link from "next/link";

import type { PageCardProps } from "@/types/index";

const PageCard = ({ page }: PageCardProps) => {
  return (
    <div className="fade-in-third px-12">
      <Link href={page.path} className="hover:no-underline">
        <div className="mb-1 mt-10 mx-auto py-4 px-10 h-32 w-72 text-black bg-white border-2 border-gray-200 rounded-lg dark:border-gray-700 transition-transform duration-300 transform hover:-translate-y-1">
          <p>
            <span className="text-lg">{page.title}</span>
            <br />
            <span className="text-sm font-normal">{page.detail}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PageCard;
