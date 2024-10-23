import React from "react";
import { Carousel, Col } from "antd";
import { SliderWrapper, Description, SliderContainer } from "./styles";
import { CollageImage } from "./types";

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
        <img src={src} alt="WhatsApp" width="100px" height="100px" />
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
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '800px', 
              padding: '20px',
              position: 'relative', 
            }}
          >
            <div
              style={{
                backgroundColor: 'white', 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1, 
                width: '100%',
                overflow: 'hidden',
                position: 'relative', 
                zIndex: 1,
              }}
            >
              <img
                src={product.image}
                alt={`Collage ${index + 1}`}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  backgroundColor: 'white', 
                }} 
              />
            </div>
            <Description>{product.description}</Description>
            <SliderContainer>
              <Col>
                <SocialLink
                  href="https://wa.me/message/IXPL7UBIKUSCN1"
                  src="/img/whatsappbanner/order-now.webp"
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
