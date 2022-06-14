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
  const [url, setUrl] = useState<string>("");
  const [pet, setPet] = useState<string>("Pet");
  const [zip, setZip] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [image, setImage] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [breed, setBreed] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [attributes, setAttributes] = useState<{}>({});
  const [location, setLocation] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [petUrl, setPetUrl] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [trained, setTrained] = useState<string>("");
  const [likes, setLikes] = useState<{}[] | []>([]);
  const [images, setImages] = useState<{}[] | []>([]);

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
      // @ts-ignore
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
        id,
        setId,
        zip,
        setZip,
        name,
        setName,
        image,
        setImage,
        images,
        setImages,
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
