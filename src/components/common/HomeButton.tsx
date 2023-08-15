import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import type { HomeButtonUrl } from "@/types/common";

const HomeButton = ({ homeButtonUrl }: { homeButtonUrl: HomeButtonUrl }) => {
  const router = useRouter();
  return (
    <div className="fade-in-back-button mt-10 center mb-10">
      <Link href="/" className="group">
        <Image
          src={homeButtonUrl}
          alt=""
          width={50}
          height={50}
          className="duration-200 group-hover:opacity-70"
        />
      </Link>
    </div>
  );
};

export default HomeButton;
