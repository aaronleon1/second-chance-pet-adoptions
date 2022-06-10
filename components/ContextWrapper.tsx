import PetContext from "./context";
import { ReactNode, useEffect, useState } from "react";
interface Props {
  children: ReactNode;
}
const ContextWrapper = ({ children }: Props) => {
  const [token, setToken] = useState(null);
  //TODO: Use to update token at specifiic times
  //const [update, setUpdate] = useState(0);
  const [pets, setPets] = useState<{}[] | null>(null);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [url, setUrl] = useState<string>(``);
  const [pet, setPet] = useState("Pet");
  const [zip, setZip] = useState<string | null>("");
  const [distance, setDistance] = useState<string | null>("default");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [gender, setGender] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [attributes, setAttributes] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [petUrl, setPetUrl] = useState("");
  const [size, setSize] = useState("");
  const [age, setAge] = useState("");
  const [trained, setTrained] = useState("");
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const fetchToken = async () => {
      const res = await fetch("/api/oauth-token");
      const token = await res.json();
      setToken(token.access_token);
    };
    fetchToken();
  }, []);
  return (
    <PetContext.Provider
      value={{
        token,
        pets,
        setPets,
        page,
        setPage,
        totalResults,
        setTotalResults,
        url,
        setUrl,
        distance,
        setDistance,
        zip,
        setZip,
        name,
        setName,
        image,
        setImage,
        gender,
        setGender,
        desc,
        setDesc,
        breed,
        setBreed,
        status,
        setStatus,
        attributes,
        setAttributes,
        location,
        setLocation,
        petUrl,
        setPetUrl,
        size,
        setSize,
        trained,
        setTrained,
        age,
        setAge,
        pet,
        setPet,
        likes,
        setLikes,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export default ContextWrapper;
