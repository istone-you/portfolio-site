import Image from "next/image";
import { githubClient } from "../libs/client";
import Back from "@/components/common/Back";
import GitHubRepo from "@/components/github/GitHubRepo";

interface AccountData {
  url: string;
}

interface AccountDataProps {
  accountUrl: AccountData;
}

interface RepoData {
  id: string;
  title: string;
  detail: string;
  image: {
    url: string;
  };
  url: string;
  category: string;
}

interface RepoDataProps {
  repoData: RepoData[];
}

const github = ({ accountUrl, repoData }: RepoDataProps & AccountDataProps) => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Back />
        <div className="my-20">
          <h1 className="text-5xl mb-12 flex items-center justify-center">
            Github
          </h1>
          <p className="flex items-center justify-center">
            アカウントは<a href={accountUrl.url}>こちら</a>
          </p>
          {repoData.map((repoData) => (
            <GitHubRepo
              key={repoData.id}
              title={repoData.title}
              detail={repoData.detail}
              image={repoData.image}
              url={repoData.url}
              category={repoData.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const [accountUrl, repoData] = await Promise.all([
    githubClient.get({ endpoint: "account" }),
    githubClient.get({ endpoint: "repo" }),
  ]);

  return {
    props: {
      accountUrl,
      repoData: repoData.contents,
    },
  };
};

export default github;
