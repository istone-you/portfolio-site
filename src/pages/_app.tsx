import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.css";
import "@/styles/fade-in.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="p-5 pb-12 w-90 my-10 px-2 sm:px-10 mx-4 md:mx-24 main-shadow">
      <Head>
        <title>iStone</title>
        <meta
          name="description"
          content="This is the portfolio site of Yu Ishii."
        />
        <meta property="og:title" content="iStone" />
        <meta
          property="og:description"
          content="This is the portfolio site of Yu Ishii."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@istone_you" />
        <meta name="twitter:title" content="iStone" />
        <meta
          name="twitter:description"
          content="This is the portfolio site of Yu Ishii."
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
