import { setHttpAgentOptions } from "next/dist/server/config";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import PetContext from "../../components/context";
import ImageSlider from "../../components/PetDetails/ImageSlider";
import Layout from "../../components/Layout";
import ConsideringAdoption from "../../components/PetDetails/ConsideringAdoption";
import DetailSection from "../../components/PetDetails/DetailSection";

const PetDetails = () => {
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
    setImages,
    setAge,
  } = useContext(PetContext);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // @ts-ignore
    let petDetails = JSON.parse(localStorage.getItem("petDetails"));
    setAge(petDetails.age);
    setName(petDetails.name);
    setDesc(petDetails.desc);
    setAttributes(petDetails.attributes);
    setStatus(petDetails.status);
    setPetUrl(petDetails.petUrl);
    setBreed(petDetails.breed);
    setSize(petDetails.size);
    setGender(petDetails.gender);
    setImages(petDetails.images);
  }, []);

  return (
    <Layout>
      <section className=" max-w-7xl mx-auto">
        <div className="bg-slate-800 md:mt-10 ">
          <ImageSlider />
        </div>
        <section className="flex flex-col md:flex-row md:justify-between my-10">
          <DetailSection />
          <ConsideringAdoption />
        </section>
      </section>
    </Layout>
  );
};

export default PetDetails;
