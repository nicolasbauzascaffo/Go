import React from "react";
import Carousel from "react-material-ui-carousel";
import "../styles/carrousel.css";
import Item from "../components/item";
import imagenes from "../helper/imagenescarrousel";

const Carrousel = (props) => {
  return (
    <Carousel className="carrousel root" >
      {imagenes.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
};

export default Carrousel;
