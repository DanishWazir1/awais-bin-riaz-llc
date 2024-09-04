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
} from "./styles";
import { SvgIcon } from "../../common/SvgIcon";
import { getProductImages } from "../../utils/loadImages"; // Import the utility function

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

  const products = [
    "Bakery Ingredients",
    "Beverage powder mix",
    "Cake Decoration",
    "Cake Glazes",
    "Cheese Product",
    "Chocolate Product",
    "Dairy Product",
    "Edible Product",
    "Fillings",
    "Flavored Spray",
    "Flour",
    "Paste",
    "Fruits",
    "Gold Silver Collection",
    "Nuts",
    "Puree",
    "Ready Made Mixes",
    "Toppings",
    "Non Food Items",
  ];

  const openProductModal = (productName: string) => {
    setSelectedProduct(productName);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedProduct(null);
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow justify="space-between" align="middle" id={id} direction={direction}>
          {id === "about" && (
            <Col lg={11} md={11} sm={12} xs={24}>
              <img src="img/about/About.jpg" alt="About Section" width="100%" />
            </Col>
          )}
          {icon && (
            <Col lg={11} md={11} sm={12} xs={24}>
              <SvgIcon src={icon} width="100%" height="100%" />
            </Col>
          )}
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <p>{t(content)}</p>
              {id === "product" && (
                <ServiceWrapper>
                  <Row gutter={[16, 16]} justify="start">
                    {products.map((product, index) => (
                      <Col key={index} lg={6} md={8} sm={12} xs={24}>
                        <div
                          style={{
                            border: "1px solid #eee",
                            padding: "10px",
                            textAlign: "center",
                            cursor: "pointer",
                          }}
                          onClick={() => openProductModal(product)}
                        >
                          <MinTitle>{t(product)}</MinTitle>
                        </div>
                      </Col>
                    ))}
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
          {selectedProduct && getProductImages(selectedProduct).map((imagePath: string, index: number) => (
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
