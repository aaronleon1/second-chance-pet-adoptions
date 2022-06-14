import { useContext, useState, useEffect } from "react";
import PetContext from "../context";
import { LikedPet } from "../../commonTypes";

const ConsideringAdoption = () => {
  const { name, petUrl } = useContext(PetContext);

  return (
    <div className="  w-full md:w-1/3 h-1/2 rounded-md shadow-xl bg-slate-800">
      <div className="p-4 flex flex-col">
        <span className="text-2xl  text-center mt-10 text-white">
          Considering {name} for adoption?
        </span>
        <span className="block w-full px-8">
          <a
            href={petUrl}
            className="text-xl bg-blue-400 hover:bg-blue-500 text-white block w-full py-2 my-10 mx-auto  text-center rounded-xl "
          >
            Apply Now
          </a>
        </span>
      </div>
    </div>
  );
};

export default ConsideringAdoption;
