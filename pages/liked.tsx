import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import PetContext from "../components/context";
import HomeSearchBar from "../components/HomeSearchBar";
import { useContext, useState, useEffect } from "react";
import PetCard from "../components/PetCard";
import Pagination from "react-js-pagination";

const Liked: NextPage = () => {
  const { page, setPets, setPage, totalResults, pet, likes } =
    useContext(PetContext);

  useEffect(() => {
    let details = localStorage.getItem("pets");
    details = JSON.parse(details);
    setPets(details);
  }, []);

  return (
    <div className="">
      <Head>
        <title>Liked Pets</title>
        <meta name="description" content="Liked Pets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className=" min-h-screen relative max-w-7xl mx-auto">
          {likes.length > 0 && (
            <span className="text-4xl text-center md:text-left mt-4">
              Liked Pets
            </span>
          )}
          <div className="flex flex-wrap justify-between mt-10 mb-20">
            {likes.length > 0 ? (
              likes.map((pet: any) => {
                return (
                  <PetCard
                    key={pet.id}
                    image={pet.image}
                    breed={pet.breed}
                    gender={pet.gender}
                    name={pet.name}
                    size={pet.size}
                    desc={pet.description}
                    petUrl={pet.url}
                    attributes={pet.attributes}
                    status={pet.status}
                    id={pet.id}
                    age={pet.age}
                  />
                );
              })
            ) : (
              <span className="block text-4xl text-center mt-20">
                You have not added any pets to your likes yet. Head to the home
                page to search for pets!
              </span>
            )}
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Liked;
