import Header from "@/components/header";
import MainPokes from "@/components/mainPokes";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>
      <Header />
      <MainPokes />
    </>
  )
}
