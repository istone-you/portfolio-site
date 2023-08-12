import type { githubAccount } from "@/types/github";

const Account = ({ githubAccount }: { githubAccount: githubAccount }) => {
  return (
    <p className="fade-in-first flex items-center justify-center">
      アカウントは<a href={githubAccount}>こちら</a>
    </p>
  );
};

export default Account;
