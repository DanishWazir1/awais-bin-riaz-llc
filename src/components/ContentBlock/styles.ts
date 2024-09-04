import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }

  @media only screen and (max-width: 575px) {
    padding: 3rem 0 3rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;

  @media only screen and (max-width: 575px) {
    font-size: 0.875rem;
    margin: 1rem 0 1.5rem 0;
  }
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding-top: 3rem;
  }

  @media only screen and (max-width: 575px) {
    padding-top: 2rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 100%;
  margin-top: 2rem;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
  color: #666;
  line-height: 1.4;
  margin-top: 0.5rem;

  @media only screen and (max-width: 575px) {
    font-size: 12px;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin-top: 2rem;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    button {
      width: 100%;
      margin-bottom: 1rem;
    }

    button:last-child {
      margin-left: 0;
      margin-bottom: 0;
    }
  }

  button:last-child {
    margin-left: 20px;

    @media only screen and (max-width: 768px) {
      margin-left: 0;
    }
  }
`;

// Custom styles for the carousel dots
export const CustomDot = styled.div`
  .slick-dots li button {
    background-color: black; /* Set dot color to black */
    opacity: 1; /* Ensure dots are fully opaque */
  }

  .slick-dots li.slick-active button {
    background-color: #000; /* Keep active dot color black */
  }
`;
