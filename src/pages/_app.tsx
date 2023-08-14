import "@/styles/globals.css";
import "@/styles/fade-in.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="p-5 pb-12 w-90 my-10 px-2 sm:px-10 mx-4 md:mx-24 border-2 border-black card-shadow">
      <Component {...pageProps} />
    </div>
  );
}
