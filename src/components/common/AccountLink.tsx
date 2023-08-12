import type { AccountUrl } from "@/types/common";

const AccountLink = ({ accountUrl }: { accountUrl: AccountUrl }) => {
  return (
    <p className="fade-in-first flex items-center justify-center">
      アカウントは<a href={accountUrl}>こちら</a>
    </p>
  );
};

export default AccountLink;
