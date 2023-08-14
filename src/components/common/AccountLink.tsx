import type { AccountUrl } from "@/types/common";

const AccountLink = ({ accountUrl }: { accountUrl: AccountUrl }) => {
  return (
    <p className="fade-in-first flex items-center justify-center">
      アカウントは
      <a href={accountUrl} className="mx-1 px-3 py-0.5 button-shadow">
        こちら
      </a>
    </p>
  );
};

export default AccountLink;
