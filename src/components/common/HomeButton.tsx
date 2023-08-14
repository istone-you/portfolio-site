import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const HomeButton = () => {
  const router = useRouter();
  return (
    <div className="fade-in-back-button mt-10 center mb-10">
      <Link href="/">
        <Image src="/image/home.png" alt="" width={50} height={50} />
      </Link>
    </div>
  );
};

export default HomeButton;
