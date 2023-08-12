import Image from "next/image";

import type { IndexProps } from "@/types/index";

const Profile = ({ index }: IndexProps) => {
  return (
    <div className="fade-in-second">
      <div className="flex items-center justify-center">
        <Image
          src={index.thumbnail.url}
          alt="thumbnail"
          width={100}
          height={100}
          className="mt-12 mb-6 rounded-full border border-black"
        />
      </div>
      <div className="mb-12 flex items-center justify-center">
        <h1 className="text-2xl">石井 湧</h1>
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
