import type { Index } from "@/types/index";

const Profile = ({ index }: { index: Index }) => {
  return (
    <div className="fade-in-second content-card py-16 px-8 sm:px-20">
      <h1 className="text-2xl mb-10 center">石井 湧</h1>
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
