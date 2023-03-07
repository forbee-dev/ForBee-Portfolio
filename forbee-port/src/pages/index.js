import Head from "next/head";
import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import Script from "next/script";

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
      <div className="pt-20"></div>
    </>
  );
}
