import Image from "next/image";
import type { Index } from "@/types/index";

const Profile = ({ index }: { index: Index }) => {
  return (
    <div className="fade-in-second py-6 px-8 sm:px-20">
      <div className="center">
        <Image
          src={index.thumbnail.url}
          alt="thumbnail"
          width={100}
          height={100}
          className="my-4 rounded-full border border-black"
        />
      </div>
      <h1 className="text-3xl mb-10 center">石井 湧</h1>
      <div
        className="mb-4 prose"
        dangerouslySetInnerHTML={{
          __html: `${index.about}`,
        }}
      />
    </div>
  );
};

export default Profile;
