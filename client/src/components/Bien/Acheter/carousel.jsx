import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importez les styles du carrousel

const ImageCarousel = ({ images }) => {
  // Vérifiez si la propriété 'images' existe et n'est pas null avant de mapper
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Carousel>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt="" />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
