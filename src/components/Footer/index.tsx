import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
} from "./styles";
import { Span } from "../Header/styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

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
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell us everything")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:sales@abrfoodstuff.ae">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>Dubai</Para>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
      <Container border={true}>
  <Row
    justify="space-between" 
    align="middle"
    style={{ paddingTop: "3rem" }}
  >
    <Col>
      <NavLink to="/">
        <LogoContainer>
          <Span>Abr Food Stuff</Span>
        </LogoContainer>
      </NavLink>
    </Col>
    <Col>
      <FooterContainer>
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
      </FooterContainer>
    </Col>
  </Row>
</Container>

      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
