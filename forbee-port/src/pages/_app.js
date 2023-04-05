import "@/styles/globals.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="/assets/index.js"
        strategy="beforeInteractive"
      ></Script>
      <div>
        <Head>
          <title>ForBee Portfolio</title>
          <meta
            name="description"
            content="ForBee Portfolio"
          />

          <link
            rel="icon"
            href="/assets/favicon.ico"
          />
        </Head>

        <Navbar />
      </div>

      <Component {...pageProps} />
    </>
  );
}
