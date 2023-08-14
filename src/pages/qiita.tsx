import { indexClient } from "../libs/client";
import { qiitaClient } from "../libs/client";
import HomeButton from "@/components/common/HomeButton";
import PageTitle from "@/components/common/PageTitle";
import AccountLink from "@/components/common/AccountLink";
import QiitaArticles from "@/components/qiita/QiitaArticles";

import type { Articles } from "@/types/qiita";
import type { AccountUrl, HomeButtonUrl } from "@/types/common";

const Qiita = ({
  qiitaAccountUrl,
  articles,
  homeButtonUrl,
}: {
  qiitaAccountUrl: AccountUrl;
  articles: Articles;
  homeButtonUrl: HomeButtonUrl;
}) => {
  return (
    <div className="center">
      <div>
        <HomeButton homeButtonUrl={homeButtonUrl} />
        <PageTitle title="Qiita" />
        <AccountLink accountUrl={qiitaAccountUrl} />
        <QiitaArticles articles={articles} />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const [qiitaAccount, articles] = await Promise.all([
    qiitaClient.get({ endpoint: "account" }),
    qiitaClient.get({ endpoint: "article" }),
  ]);
  const index = await indexClient.get({ endpoint: "index" });

  return {
    props: {
      qiitaAccountUrl: qiitaAccount.url,
      articles: articles.contents,
      homeButtonUrl: index.homebutton.url,
    },
  };
};

export default Qiita;
