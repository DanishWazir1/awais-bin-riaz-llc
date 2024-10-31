import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import Block from "../Block";
import { ContactContainer, InfoContainer, InfoLabelCol, InfoValueCol } from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {
  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <InfoContainer>
              <Row>
                <Col span={8}>
                  <InfoLabelCol>
                    <div>{t("Email")}:</div>
                    <div>{t("Sales Email")}:</div>
                    <div>{t("Phone")}:</div>
                    <div>{t("Phone")}:</div>
                    <div>{t("Address")}:</div>
                  </InfoLabelCol>
                </Col>
                <Col span={16}>
                  <InfoValueCol>
                    <div>info@abrfoodstuff.ae</div>
                    <div>sales@abrfoodstuff.ae</div>
                    <div>0522841328</div>
                    <div>0567828849</div>
                    <div>Warehouse# 7 Street# 24B, Al-Quoz Industrial Area, Dubai</div>
                  </InfoValueCol>
                </Col>
              </Row>
            </InfoContainer>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
