import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import PetContext from "../components/context";
import HomeSearchBar from "../components/Home/HomeSearchBar";
import { useContext, useState, useEffect } from "react";
import PetCard from "../components/PetCard";
import Pagination from "react-js-pagination";

const Pets: NextPage = () => {
  const {
    pets,
    token,
    zip,

    page,
    setPets,
    setPage,
    totalResults,
    pet,
    likes,
  } = useContext(PetContext);
  const [loaded, setLoaded] = useState(false);

  const handleChange = async (page: number) => {
    const data = await fetch(
      `https://api.petfinder.com/v2/animals?type=${pet}&location=${zip}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    ).then((data) => data.json());
    setPets(data);
    setPage(page);
    setLoaded(true);
    window.scroll(0, 0);
  };

  useEffect(() => {
    let details = localStorage.getItem("pets");
    // @ts-ignore
    details = JSON.parse(details);
    // @ts-ignore
    setPets(details);
  }, []);

  return (
    <div className="">
      <Head>
        <title>Pets</title>
        <meta name="description" content="Pets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className=" min-h-screen relative max-w-7xl mx-auto">
          {/* @ts-ignore */}
          {pets?.animals && pets?.animals.length > 0 ? (
            <span className="block text-4xl text-center md:text-left mt-10">{`${
              pet == "dog" ? "Dogs" : "Cats"
            } available for adoption`}</span>
          ) : null}
          <div className="flex flex-wrap justify-between mt-10 mb-20">
            {/* @ts-ignore */}
            {pets?.animals &&
              // @ts-ignore
              pets.animals.map((pet: any) => {
                return (
                  // @ts-ignore
                  <PetCard
                    key={pet.id}
                    image={
                      pet.photos[0]?.full
                        ? pet.photos[0]?.full
                        : pet.photos[0]?.large || "/no-image-available.jpg"
                    }
                    images={pet.photos}
                    breed={pet.breeds.primary}
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
              })}
          </div>
          <div className="max-w-max ml-auto mt-5">
            {/* @ts-ignore */}
            {pets?.animals && pets?.animals.length > 0 ? (
              <Pagination
                activePage={page}
                itemsCountPerPage={totalResults / 20}
                totalItemsCount={totalResults}
                pageRangeDisplayed={5}
                onChange={handleChange}
              />
            ) : null}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Pets;
