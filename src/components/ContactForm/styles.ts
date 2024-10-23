import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const InfoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  line-height: 1.5;
`;

export const InfoLabelCol = styled("div")`
  font-weight: bold;
  color: #18216d;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InfoValueCol = styled("div")`
  color: #18216d;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
