import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="p-5 pb-12 w-90 m-auto border-2 border-black my-10 mx-24 card-shadow">
      <Component {...pageProps} />
    </div>
  );
}
