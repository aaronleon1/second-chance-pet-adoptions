import Link from "next/link";
import React, { useContext } from "react";
import PetContext from "./context";
import { isValidZip } from "./ValidateZip";
const HomeSearchBar = () => {
  const { zip, setZip, setPets, token, setTotalResults, pet, setPet, setPage } =
    useContext(PetContext);

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
      className="text-center absolute bottom-60 md:bottom-44 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 sm:w-3/4 lg:w-2/3 xl:w-[40%] bg-white rounded-md flex justify-between items-center h-16 px-2"
    >
      <input
        type="text"
        name="zipcode"
        value={zip}
        onChange={handleZip}
        className="w-1/4 sm:1/2 md:w-1/2 lg:1/3 ml-1 md:ml-4 h-10 focus:outline-none border-r-2"
        placeholder="Zip Code*"
      />
      <div
        // @ts-ignore
        onChange={handlePet}
        className="flex md:px-4 w-11/12 mx-auto"
      >
        <div className="w-full flex items-center mr-8 md:mr-0">
          <select className="w-full focus:outline-none bg-white">
            <option disabled selected value="Pet">
              Pet
            </option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        // @ts-ignore
        onClick={handleSubmit}
        className="  bg-blue-500 h-10 w-12 md:w-16 rounded-lg text-white mr-1 "
      >
        {zip?.length === 5 && token && isValidZip(zip) && pet !== "Pet" ? (
          <Link href={"/pets"}>
            <i className="block fa-solid fa-magnifying-glass w-full h-full fa-lg pt-5 "></i>
          </Link>
        ) : (
          <Link href={"/"}>
            <i className="fa-solid fa-magnifying-glass w-full h-full  fa-lg pt-5"></i>
          </Link>
        )}
      </button>
    </form>
  );
};

export default HomeSearchBar;
