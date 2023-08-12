import type { AppProps } from "next/app";

import Header from "@/src/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen overflow-auto text-lightText">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
/* eslint-disable @next/next/no-html-link-for-pages */
