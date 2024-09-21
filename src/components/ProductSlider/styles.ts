import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 100%;
  height: auto; /* Adjust height dynamically based on content */
  margin-bottom: 50px; /* Adds spacing before the next section */
  position: relative;
  z-index: 1;

  .ant-carousel .slick-slide {
    position: relative;
  }

  img {
    width: 100%;
    height: auto; /* Adjusts image height to maintain aspect ratio */
    object-fit: cover; /* Ensures image covers the container proportionally */
  }
`;

export const Description = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  z-index: 10; /* Ensures description is on top */
`;
