import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import PetContext from "../components/context";
import { useContext, useState, useEffect } from "react";
import PetCard from "../components/PetCard";
import Link from "next/link";
import { useRouter } from "next/router";

const Liked: NextPage = () => {
  const { page, setPets, setPage, totalResults, pet, likes, setLikes } =
    useContext(PetContext);
  const router = useRouter();
  useEffect(() => {
    let likedPets = localStorage.getItem("likedPets");
    // @ts-ignore
    likedPets = JSON.parse(likedPets);
    // @ts-ignore
    setLikes(likedPets);
  }, []);

  return (
    <div className="">
      <Head>
        <title>Liked Pets</title>
        <meta name="description" content="Liked Pets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className="min-h-screen max-w-7xl mx-auto">
          {likes && likes?.length > 0 && (
            <span className="block text-4xl text-center md:text-left my-10">
              Liked Pets
            </span>
          )}
          <div className="flex flex-wrap justify-evenly mt-10 mb-20">
            {likes && likes?.length > 0 ? (
              likes?.map((pet: any) => {
                return (
                  // @ts-ignore
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
                    images={pet.images}
                  />
                );
              })
            ) : (
              <div className="max-w-7xl mx-auto">
                <span className="block text-4xl text-center mt-5 md:mt-20 px-10  lg:px-60">
                  You have not added any pets to your likes yet.
                </span>
                <div className="flex mt-20 w-96 mx-auto justify-between px-5">
                  <button
                    onClick={() => router.back()}
                    className="block bg-blue-400 hover:bg-blue-500 text-white p-5 w-40 text-center mx-auto rounded-xl"
                  >
                    Back
                  </button>

                  <Link href="/">
                    <a className="block bg-blue-400 hover:bg-blue-500 text-white p-5 w-40 text-center mx-auto rounded-xl">
                      Home
                    </a>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Liked;
