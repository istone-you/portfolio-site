import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import type { HomeButtonUrl } from "@/types/common";

const HomeButton = ({ homeButtonUrl }: { homeButtonUrl: HomeButtonUrl }) => {
  const router = useRouter();
  return (
    <div className="fade-in-back-button mt-10 center mb-10">
      <Link href="/">
        <Image src={homeButtonUrl} alt="" width={50} height={50} />
      </Link>
    </div>
  );
};

export default HomeButton;
