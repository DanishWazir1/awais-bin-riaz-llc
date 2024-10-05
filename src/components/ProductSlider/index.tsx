import React from "react";
import { Carousel, Col } from "antd";
import { SliderWrapper, Description, SliderContainer } from "./styles";
import { CollageImage } from "./types";
import { SvgIcon } from "../../common/SvgIcon";

interface ProductSliderProps {
  products: CollageImage[];
}

interface SocialLinkProps {
  href: string;
  src: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <SliderWrapper>
      <Carousel autoplay autoplaySpeed={3000} dots>
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white', // Ensure the background is set to white
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '800px', // Fixed height for better visibility
              padding: '20px',
              position: 'relative', // Ensure that this div is the reference for child positioning
            }}
          >
            <div
              style={{
                backgroundColor: 'white', // Ensure the inner div also has a white background
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1, // Take up the remaining space
                width: '100%',
                overflow: 'hidden',
                position: 'relative', // Ensure proper stacking context
                zIndex: 1, // Place it above other elements
              }}
            >
              <img
                src={product.image}
                alt={`Collage ${index + 1}`}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  backgroundColor: 'white', // Image background to avoid black background
                }} // Maintain aspect ratio
              />
            </div>
            <Description>{product.description}</Description>
            <SliderContainer>
              <Col>
                <SocialLink
                  href="https://www.facebook.com/share/PLWL9JrkEfKcRfrD/?mibextid=qi2Omg"
                  src="github.svg"
                />
              </Col>
              <Col>
                <SocialLink
                  href="https://wa.me/message/IXPL7UBIKUSCN1"
                  src="twitter.svg"
                />
              </Col>
              <Col>
                <SocialLink
                  href="https://www.instagram.com/abr.foodstuff?utm_source=qr&igsh=ZmVkNmdlODhqdjk="
                  src="linkedin.svg"
                />
              </Col>
            </SliderContainer>
          </div>
        ))}
      </Carousel>
    </SliderWrapper>
  );
};

export default ProductSlider;
