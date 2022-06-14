import { useContext } from "react";
import PetContext from "../context";

const DetailSection = () => {
  const { name, desc, attributes, status, petUrl, breed, size, gender, age } =
    useContext(PetContext);

  return (
    <div className="md:w-7/12 shadow-xl rounded-xl mb-10 md:mb-20 border-t-2">
      <div className="flex flex-col p-3">
        <span className="block text-3xl mb-4">Meet {name}</span>

        <hr />
        <div className="flex  my-6">
          <span className="block">{age}</span>
          <span className="mx-2 text-sm">•</span>
          <span className="block">{gender}</span>
          <span className="mx-2  text-sm">•</span>
          <span>{size}</span>
        </div>
        <hr />
        <span className="text-2xl mt-4 mb-3">About</span>
        <span className="block mb-3">
          {desc
            ? desc
            : "No information currently available. Check back later, or click view more for contact information."}
        </span>
        <a
          href={petUrl}
          target="_blank"
          rel="noreferrer"
          className="max-w-max bg-blue-400 py-1 px-2 text-white hover:bg-blue-500 mb-4 rounded-md"
        >
          View More
        </a>
        <hr />
        <span className="text-2xl my-4">Quick Facts</span>
        {status === "adoptable" ? (
          <span className="text-xl mb-4">Adoptable</span>
        ) : (
          <span className="text-xl mb-4">
            Not adoptable yet - click view more for more information
          </span>
        )}
        {attributes?.spayed_neutered && (
          <span className="text-xl mb-4">Spayed/Neutered</span>
        )}
        {attributes?.shots_current && (
          <span className="text-xl mb-4">Current on shots</span>
        )}
        {attributes?.shots_current && (
          <span className="text-xl mb-4">House trained</span>
        )}
        {attributes?.special_needs && (
          <span className="text-xl mb-4">
            {name} has special needs. Click{" "}
            <a
              href={petUrl}
              target="_blank"
              rel="noreferrer"
              className="max-w-max hover:text-blue-500"
            >
              here
            </a>{" "}
            for more details.
          </span>
        )}
      </div>
    </div>
  );
};

export default DetailSection;
