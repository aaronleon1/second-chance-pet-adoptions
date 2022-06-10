import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import PetContext from "./context";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const HomeSearchBar = () => {
  const {
    zip,
    setZip,
    distance,
    setDistance,
    pets,
    setPets,
    token,
    setTotalResults,
    pet,
    setPet,
    setPage,
  } = useContext(PetContext);

  const [loaded, setLoaded] = useState(false);
  const handleZip = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZip(event.target.value);
  };
  const handlePet = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPet(event.target.value);
  };
  const handleDistance = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDistance(event.target.value);
  };
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch(
      `https://api.petfinder.com/v2/animals?type=${pet}&location=${zip}&distance=${distance}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("pets", JSON.stringify(data));
        setPets(data);
        setPage(1);
        setTotalResults(data.pagination.total_count);
      })
      .catch((error) => console.log("Error: ", error));
  };

  return (
    <form
      noValidate
      id="pet-search"
      autoComplete="off"
      className="text-center absolute bottom-36 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-8/12 bg-white rounded-md flex justify-between items-center h-16"
    >
      <input
        type="text"
        name="zipcode"
        value={zip}
        onChange={handleZip}
        className="w-1/4 pl-1 ml-4 h-10"
        placeholder="Zip Code*"
      />
      <select
        value={pet}
        onChange={handlePet}
        placeholder="pet"
        className="h-10 w-1/4 bg-white"
      >
        <option value="Pet" disabled hidden className="bg-white">
          Pet
        </option>
        <option value="dog" className="bg-white">
          Dog
        </option>
        <option value="cat" className="bg-white">
          Cat
        </option>
      </select>

      <select
        value={distance}
        onChange={handleDistance}
        className="h-10 w-1/4 bg-white"
      >
        <option value="default" disabled hidden className="bg-white">
          Distance (miles)
        </option>
        <option value="5" className="bg-white">
          5
        </option>
        <option value="10" className="bg-white">
          10
        </option>
        <option value="25" className="bg-white">
          25
        </option>
        <option value="50" className="bg-white">
          50
        </option>
        <option value="100" className="bg-white">
          100
        </option>
        <option value="250" className="bg-white">
          250
        </option>
      </select>

      <span className="w-8 mr-4">
        {pet && zip?.length >= 5 && token ? (
          <button type="submit" onClick={handleSubmit} className="mr-4">
            <Link href="/pets">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="py-2 text-blue-500 text-2xl"
              />
            </Link>
          </button>
        ) : (
          ""
        )}
      </span>
    </form>
  );
};

export default HomeSearchBar;
