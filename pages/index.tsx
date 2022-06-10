import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import PetContext from "../components/context";
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
        <div className="flex flex-col justify-between min-h-screen hero relative">
          <span className="text-6xl text-white absolute top-32 w-full md:ml-4 text-center">
            Second Chance Pet Adoptions
          </span>
          <HomeSearchBar />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
