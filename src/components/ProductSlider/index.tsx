import React from "react";
import { Carousel } from "antd";
import { SliderWrapper, Description } from "./styles";
import { CollageImage } from "./types";

interface ProductSliderProps {
  products: CollageImage[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  return (
    <SliderWrapper>
      <Carousel autoplay autoplaySpeed={3000} dots>
        {products.map((product, index) => (
          <div key={index}>
            <img src={product.image} alt={`Collage ${index + 1}`} />
            <Description>{product.description}</Description>
          </div>
        ))}
      </Carousel>
    </SliderWrapper>
  );
};

export default ProductSlider;
