import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import PetContext from "./context";
import { isValidZip } from "./ValidateZip";
const HomeSearchBar = () => {
  const { zip, setZip, setPets, token, setTotalResults, pet, setPet, setPage } =
    useContext(PetContext);
  //Set link based on if zip code is valid or not
  const [loaded, setLoaded] = useState(false);
  const handleZip = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZip(event.target.value);
  };
  const handlePet = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPet(event.target.value);
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidZip(zip)) {
      alert("Invalid zip code. Please enter a valid zip code.");
      return;
    }

    await fetch(
      `https://api.petfinder.com/v2/animals?type=${pet}${
        zip && "&location=" + zip
      }`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
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
      className="text-center absolute bottom-60 md:bottom-44 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 md:w-1/3  bg-white rounded-md flex justify-between items-center h-16 px-2"
    >
      <input
        type="text"
        name="zipcode"
        value={zip}
        onChange={handleZip}
        className="w-2/3  ml-4 h-10 focus:outline-none border-r-2"
        placeholder="Zip Code*"
      />
      <div onChange={handlePet} className="flex px-4 w-1/3">
        <div className="mr-5">
          <input
            type="radio"
            value="dog"
            name="pet"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:outline-none"
          />
          <label className="ml-2 text-sm font-medium text-gray-900 ">Dog</label>
        </div>
        <div>
          <input
            type="radio"
            value="cat"
            name="pet"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500   focus:outline-none"
          />

          <label className="ml-2 text-sm font-medium text-gray-900 ">Cat</label>
        </div>
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        className="ml-4 bg-blue-500 h-10 w-10 rounded-lg text-white mr-1 "
      >
        {zip?.length === 5 && token && isValidZip(zip) ? (
          <Link href={"/pets"}>
            <i className="fa-solid fa-magnifying-glass w-full h-full py-3"></i>
          </Link>
        ) : (
          <Link href={"/"}>
            <i className="fa-solid fa-magnifying-glass text-lg w-full h-full"></i>
          </Link>
        )}
      </button>
    </form>
  );
};

export default HomeSearchBar;
