import Image from "next/image";

import type { Index } from "@/types/index";

const Profile = ({ index }: { index: Index }) => {
  return (
    <div className="fade-in-second mx-8">
      <div className="mb-2 flex items-center justify-center">
        <h1 className="text-2xl px-10 py-1 title-shadow">石井 湧</h1>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={index.thumbnail.url}
          alt="thumbnail"
          width={100}
          height={100}
          className=" mb-6 rounded-full border border-black"
        />
      </div>
      <div
        className="prose"
        dangerouslySetInnerHTML={{
          __html: `${index.about}`,
        }}
      />
    </div>
  );
};

export default Profile;
