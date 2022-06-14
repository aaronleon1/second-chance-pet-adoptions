import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useContext } from "react";
import PetContext from "../context";
import Image from "next/image";

const ImageSlider = () => {
  const { images, name } = useContext(PetContext);
  return (
    <Carousel infiniteLoop>
      {images?.map((image, id) => {
        return (
          <div key={id + "id"}>
            <Image
              src={image.large}
              alt={`image of ${name}`}
              height={500}
              width={400}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
