import Head from "next/head";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import Main from "@/components/Main";

export default function Home() {
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

      <Main />
    </>
  );
}
