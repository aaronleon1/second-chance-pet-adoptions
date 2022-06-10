import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import PetContext from "../../components/context";
import Layout from "../../components/Layout";
import ConsideringAdoption from "../../components/PetDetails/ConsideringAdoption";
import DetailSection from "../../components/PetDetails/DetailSection";

const PetDetails = () => {
  const {
    image,
    name,
    gender,
    size,
    breed,
    desc,
    petUrl,
    attributes,
    status,
    setName,
    setImage,
    setDesc,
    setAttributes,
    setStatus,
    setPetUrl,
    setBreed,
    setSize,
    setGender,
  } = useContext(PetContext);

  useEffect(() => {
    let details = localStorage.getItem("petDetails");
    details = JSON.parse(details);
    setName(name);
    setImage(image);
    setDesc(desc);
    setAttributes(attributes);
    setStatus(status);
    setPetUrl(petUrl);
    setBreed(breed);
    setSize(size);
    setGender(gender);
  }, []);
  return (
    <Layout>
      <section className=" max-w-7xl mx-auto">
        <div className="bg-image-bg">
          <div className="w-1/3 mx-auto mt-20 ">
            <Image src={image} alt={name} height={700} width={600} />
          </div>
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
