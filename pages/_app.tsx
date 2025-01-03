import type { AppProps } from "next/app";

import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-full bg-bodyColor text-lightText">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
