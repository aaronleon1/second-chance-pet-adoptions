import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import {
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
  images,
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
    setId,
    setImages,
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
    setId(id);
    setImages(images);

    localStorage.setItem(
      "petDetails",
      JSON.stringify({
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
        images: images,
      })
    );
  };

  const pet: LikedPet = {
    id: id,
    name: name,
    image: image,
    images: images,
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
    // @ts-ignore
    if (likes.filter((e) => e.id === pet.id).length > 0) {
      // @ts-ignore
      setLikes(removedPet.filter((value) => value.id !== pet.id));
    } else {
      // @ts-ignore
      setLikes((prevState) => [...prevState, pet]);
    }
    localStorage.setItem("likedPets", JSON.stringify(likes));
  };

  return (
    <button
      className=" md:w-1/5 my-2 md:mx-0.5 bg-white rounded-xl shadow-md cursor-default flex flex-col h-90 w-96 mx-auto md:h-auto "
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
      <div className="p-2 w-full mt-auto">
        <div className="flex  mb-3">
          <Link href={`/pet/${id}`}>
            <span className="block text-xl text-left cursor-pointer font-nunito">
              {name}
            </span>
          </Link>
          <span className="block ml-2 text-right">
            {gender == "Female" ? (
              <i className="fa-solid fa-venus text-gray-400"></i>
            ) : (
              <i className="fa-solid fa-mars text-gray-400"></i>
            )}
          </span>
        </div>

        <div className="flex mb-4 justify-self-end">
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
          <a
            role="button"
            className={`text-white bg-blue-400 block w-16 px-3 py-1 my-3 rounded-md ${
              // @ts-ignore
              likes.filter((likedPet) => likedPet.id === pet.id).length > 0
                ? "hover:bg-red-600"
                : "hover:bg-green-400"
            }
            )}`}
            onClick={() => HandleLikes(pet)}
          >
            {/* @ts-ignore */}
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
          </a>
        </div>
      </div>
    </button>
  );
};

export default PetCard;
