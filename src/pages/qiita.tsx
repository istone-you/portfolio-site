import { qiitaClient } from "../libs/client";
import HomeButton from "@/components/common/HomeButton";
import PageTitle from "@/components/common/PageTitle";
import AccountLink from "@/components/common/AccountLink";
import QiitaArticles from "@/components/qiita/QiitaArticles";

import type { Articles } from "@/types/qiita";
import type { AccountUrl } from "@/types/common";

const Qiita = ({
  qiitaAccountUrl,
  articles,
}: {
  qiitaAccountUrl: AccountUrl;
  articles: Articles;
}) => {
  return (
    <div className="center">
      <div>
        <HomeButton />
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

  return {
    props: {
      qiitaAccountUrl: qiitaAccount.url,
      articles: articles.contents,
    },
  };
};

export default Qiita;
