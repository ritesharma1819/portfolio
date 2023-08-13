/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Ritesh Sharma</title>
        <meta name="title" content="Ritesh Sharma" />
        <meta name="description" content="My Personal Corner on the Internet" />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ritesh Sharma" />
        <meta
          property="og:description"
          content="My Personal Corner on the Internet"
        />
        <meta property="og:image" content="https://example.com/hritik" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Ritesh Sharma" />
        <meta
          property="twitter:description"
          content="My Personal Corner on the Internet"
        />
        <meta property="twitter:image" content="https://example.com/hritik" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
