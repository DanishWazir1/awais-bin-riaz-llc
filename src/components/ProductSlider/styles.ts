import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 100%;
  height: 50px; /* Adjusted height for better visibility */
  margin-bottom: 50px; /* Spacing before the intro section */
  position: relative;
  z-index: 1; /* Ensure it is above other content */

  .ant-carousel .slick-slide {
    position: relative;
  }

  img {
    width: 100%;
    height: 50%;
    object-fit: cover; /* Ensures the image covers the container */
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
