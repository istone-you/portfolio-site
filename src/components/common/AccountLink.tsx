import type { AccountUrl } from "@/types/common";

const AccountLink = ({ accountUrl }: { accountUrl: AccountUrl }) => {
  return (
    <p className="fade-in-second center">
      アカウントは
      <a
        href={accountUrl}
        className="mx-1 px-3 py-0.5 button-shadow no-underline"
      >
        こちら
      </a>
    </p>
  );
};

export default AccountLink;
