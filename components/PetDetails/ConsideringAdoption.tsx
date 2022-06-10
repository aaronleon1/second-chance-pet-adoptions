import { useContext } from "react";
import PetContext from "../context";

const ConsideringAdoption = () => {
  const { petUrl, name } = useContext(PetContext);
  return (
    <div className=" bg-blue-500 w-1/3 h-1/2 rounded-md shadow-xl">
      <div className="p-4 flex flex-col">
        <span className="text-2xl text-white text-center mt-10 mb-6">
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
