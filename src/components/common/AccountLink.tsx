import type { AccountUrl } from "@/types/common";

const AccountLink = ({ accountUrl }: { accountUrl: AccountUrl }) => {
  return (
    <p className="fade-in-second center">
      アカウントは
      <a
        href={accountUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="no-underline group"
      >
        <div className="mx-1 px-3 py-0.5 button-shadow">こちら</div>
      </a>
    </p>
  );
};

export default AccountLink;
