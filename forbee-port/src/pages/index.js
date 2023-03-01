import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";

export default function Home() {
  return (
    <>
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
        <Navbar></Navbar>
      </div>
      <div className="pt-20">
        <Theme></Theme>
      </div>
    </>
  );
}
