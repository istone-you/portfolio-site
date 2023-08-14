import type { Index } from "@/types/index";

const Profile = ({ index }: { index: Index }) => {
  return (
    <div className="fade-in-second mx-8">
      <div className="mb-10 flex items-center justify-center">
        <h1 className="text-2xl px-10 py-1 title-shadow">石井 湧</h1>
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
