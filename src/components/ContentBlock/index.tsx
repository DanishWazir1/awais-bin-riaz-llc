import { Row, Col, Modal, Carousel } from "antd";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { withTranslation } from "react-i18next";
import { ContentBlockProps } from "./types";
import {
  ContentSection,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  StyledRow,
  ProductBox,
} from "./styles";
import { SvgIcon } from "../../common/SvgIcon";
import { getProductImages } from "../../utils/loadImages";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [productImages, setProductImages] = useState<string[]>([]); 

  const products = [
    "Bakery",
    "Beverage",
    "Cake",
    "Cakes",
    "Cheese",
    "Chocolate",
    "Dairy",
    "Edible",
    "Fillings",
    "Flavored",
    "Flour",
    "Paste",
    "Fruits",
    "GoldSilver",
    "Nuts",
    "Puree",
    "ReadyMadeMixes",
    "Toppings",
    "Nonfooditems",
  ];

  const openProductModal = (productName: string) => {
    const images = getProductImages(productName);
    setSelectedProduct(productName);
    setProductImages(images);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedProduct(null);
    setProductImages([]);
  };

  return (
    <ContentSection>
      <Fade direction={direction === "center" ? "up" : direction} triggerOnce>
        <StyledRow
          justify={direction === "center" ? "center" : "space-between"} 
          align="middle"
          id={id}
          direction={direction}
        >
          {icon && (
            <Col lg={10} md={10} sm={10} xs={18}>
              <SvgIcon src={icon} width="100%" height="100%" />
            </Col>
          )}
          <Col lg={13} md={13} sm={13} xs={21}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <p>{t(content)}</p>
              {id === "product" && (
                <ServiceWrapper>
                  <Row gutter={[24, 24]} justify="start">
                    {products.map((product, index) => {
                      const productImages = getProductImages(product);
                      const firstImage = productImages.length > 0 ? productImages[0] : '/path/to/default/image.jpeg';

                      return (
                        <Col key={index} lg={8} md={12} sm={12} xs={24}>
                          <ProductBox
                            onClick={() => openProductModal(product)}
                            style={{
                              backgroundImage: firstImage ? `url(${firstImage})` : 'none',
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center",
                              height: "200px",
                              display: "flex",
                              alignItems: "flex-end",
                              justifyContent: "center",
                              color: "#fff",
                              padding: "10px",
                              textShadow: "0 0 5px rgba(0, 0, 0, 0.7)"
                            }}
                          >
                            <MinTitle>{t(product)}</MinTitle>
                          </ProductBox>
                        </Col>
                      );
                    })}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>

      <Modal
        title={selectedProduct}
        visible={isModalVisible}
        onCancel={closeModal}
        footer={null}
        width={800}
        centered
      >
        <Carousel
          autoplay
          autoplaySpeed={3000}
          speed={500}
          dots
          dotPosition="bottom"
          className="custom-dot"
        >
          {productImages.map((imagePath: string, index: number) => (
            <div key={index}>
              <img
                src={imagePath}
                alt={`${selectedProduct} ${index + 1}`}
                style={{
                  width: "100%",
                  maxWidth: "700px",
                  maxHeight: "600px",
                  margin: "0 auto",
                  display: "block",
                }}
              />
            </div>
          ))}
        </Carousel>
      </Modal>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
