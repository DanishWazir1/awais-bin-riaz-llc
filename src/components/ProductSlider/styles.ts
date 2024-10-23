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
  bottom: 100px; 
  left: 20px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5); /* Adjusting opacity to 0.5 */
  padding: 20px 30px; /* Adding horizontal padding */
  border-radius: 8px;
  font-size: 20px; 
  font-weight: bold; 
  z-index: 10;
  max-width: 50%; 
  line-height: 1.4; 
  display: inline-block;
  white-space: pre-wrap;
`;

export const SliderContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: 20px; 
  display: flex;
  align-items: center;
  z-index: 10; 
  gap: 15px;

  a {
    display: inline-block;
    width: 60px; 
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover {
      transform: scale(1.2); 
    }
  }

  img {
  width: 180px;
  height: 70px;
  border: none; 
  border-radius: 10px;
  margin-top: 50px;
  margin-left: 120px;
  transition: background-color 0.3s ease; 
}


`;
