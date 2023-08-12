import type { AppProps } from "next/app";

import Header from "@/src/components/Header";
import "@/styles/globals.css";
import Footer from "@/src/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-full bg-bodyColor text-lightText">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
