import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import HomeSearchBar from "../components/HomeSearchBar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Second Chance Pet Adoptions</title>
        <meta name="description" content="Second Chance Pet Adoptions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className="flex flex-col  min-h-screen hero relative">
          <h1 className="block  font-script font-bold  text-slate-700   text-5xl xl:text-6xl text-center mt-10 w-96 mx-auto px-10 md:text-left md:absolute md:left-[10%] xl:left-[15%] md:top-[5%]">
            Second Chance Pet Adoptions
          </h1>

          <HomeSearchBar />
        </section>
      </Layout>
    </div>
  );
};

export default Home;
