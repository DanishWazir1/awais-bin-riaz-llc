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

export const ProductBox = styled("div")`
  border: 2px solid #eee;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff; 
  background-color: #000; 
  background-image: none; 

  &:hover {
    transform: translateY(-10px); 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    border-color: #333; 
    opacity: 0.5;
  }
`;



export const MinTitle = styled("h6")`
  font-size: 16px;
  line-height: 1.2rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #fff; 
  background-color: rgba(0, 0, 0, 0.6); 
  padding: 10px; 

  ${ProductBox}:hover & {
    background-color: #000000;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }

  font-family: "Motiva Sans Light", sans-serif;
`;

