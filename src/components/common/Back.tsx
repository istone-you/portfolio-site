import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Back = () => {
  const router = useRouter();
  return (
    <div className="fade-in-back-button mt-10 flex items-center justify-center mb-10">
      <Link
        href="#"
        onClick={() => {
          router.back();
        }}
      >
        <Image src="/image/home.png" alt="" width={50} height={50} />
      </Link>
    </div>
  );
};

export default Back;
