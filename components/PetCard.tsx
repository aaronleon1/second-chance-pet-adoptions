import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import {
  faMars,
  faVenus,
  faHeartCirclePlus,
  faHeartCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import PetContext from "./context";
import { LikedPet, PetCard } from "../commonTypes";

const PetCard = ({
  image,
  name,
  gender,
  size,
  breed,
  id,
  desc,
  petUrl,
  attributes,
  status,
  age,
}: PetCard) => {
  const {
    setName,
    setImage,
    setDesc,
    setAttributes,
    setStatus,
    setPetUrl,
    setBreed,
    setSize,
    setGender,
    setAge,
    likes,
    setLikes,
  } = useContext(PetContext);

  //OnClick, add pet details to state for its personal page.
  const assignPetHandler = () => {
    setName(name);
    setImage(image);
    setDesc(desc);
    setAttributes(attributes);
    setStatus(status);
    setPetUrl(petUrl);
    setBreed(breed);
    setSize(size);
    setGender(gender);
    setAge(age);

    localStorage.setItem(
      "petDetails",
      JSON.stringify({
        name: name,
        image: image,
        breed: breed,
        desc: desc,
        attributes: attributes,
        status: status,
        petUrl: petUrl,
        gender: gender,
        size: size,
        age: age,
      })
    );
  };

  const pet: LikedPet = {
    id: id,
    name: name,
    image: image,
    breed: breed,
    desc: desc,
    attributes: attributes,
    status: status,
    petUrl: petUrl,
    gender: gender,
    size: size,
    age: age,
  };

  const HandleLikes = (pet: LikedPet) => {
    let removedPet = [...likes];
    if (likes.filter((e) => e.id === pet.id).length > 0) {
      setLikes(removedPet.filter((value) => value.id !== pet.id));
      console.log("removed" + likes);
    } else {
      setLikes((prevState) => [...prevState, pet]);
      console.log("added");
    }
  };

  return (
    <button
      className="w-full md:w-1/5 my-2 md:mx-0.5 bg-white rounded-xl shadow-md cursor-default flex flex-col"
      onClick={assignPetHandler}
    >
      <Link href={`/pet/${id}`}>
        <Image
          src={image}
          alt={name}
          width={600}
          height={700}
          quality={75}
          className="pet-card rounded-xl cursor-pointer"
        />
      </Link>
      <div className="p-2">
        <div className="flex  mb-3">
          <Link href={`/pet/${id}`}>
            <span className="block text-xl text-left cursor-pointer font-nunito">
              {name}
            </span>
          </Link>
          <span className="block ml-2 text-right">
            {gender == "Female" ? (
              <FontAwesomeIcon
                icon={faVenus}
                color="#a6a6a6"
                className="w-4 pt-1"
              />
            ) : (
              <FontAwesomeIcon
                icon={faMars}
                color="#a6a6a6"
                className="w-4 pt-1"
              />
            )}
          </span>
        </div>

        <div className="flex mb-4">
          <span className="block text-sm text-gray-600 font-nunito">
            {size}
          </span>
          <span className="block text-sm text-gray-600 ml-1 font-nunito">
            {breed}
          </span>
        </div>
        <div className="flex justify-between">
          <Link href={`/pet/${id}`}>
            <a
              role="button"
              href="#"
              className="text-white bg-blue-400 block w-32 px-3 py-1 my-3 rounded-md "
            >
              Learn More
            </a>
          </Link>
          <button
            className="text-white bg-blue-400 block w-16 px-3 py-1 my-3 rounded-md"
            onClick={() => HandleLikes(pet)}
          >
            {likes.filter((likedPet) => likedPet.id === pet.id).length > 0 ? (
              <FontAwesomeIcon
                icon={faHeartCircleMinus}
                color="#ffffff"
                className="w-4 pt-1 mx-auto"
              />
            ) : (
              <FontAwesomeIcon
                icon={faHeartCirclePlus}
                color="#ffffff"
                className="w-4 pt-1 mx-auto"
              />
            )}
          </button>
        </div>
      </div>
    </button>
  );
};

export default PetCard;
