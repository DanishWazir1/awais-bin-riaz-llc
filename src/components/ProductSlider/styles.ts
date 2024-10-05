import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 50px;
  position: relative;
  z-index: 1;

  .ant-carousel .slick-slide {
    position: relative;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  position: absolute;
  bottom: 50px; /* Adjust this value to align with the buttons */
  left: 20px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  z-index: 10;
`;

export const SliderContainer = styled.div`
  position: absolute;
  bottom: 50px; /* Matches the bottom position of Description */
  right: 20px; /* Align to the right */
  display: flex;
  align-items: center;
  z-index: 10; /* Ensure it's above the image */
  gap: 15px; /* Space between buttons */

  a {
    display: inline-block;
    width: 60px; /* Increased size */
    height: 60px;
    border-radius: 50%;
    background-color: rgba(255, 130, 92, 0.8); /* Highlight background */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover {
      transform: scale(1.2); /* Slightly larger on hover */
      background-color: rgba(255, 130, 92, 1); /* Brighten the highlight on hover */
    }
  }

  svg {
    width: 25px;
    height: 25px;
    fill: white; /* Ensures icons are white for better contrast */
  }
`;
