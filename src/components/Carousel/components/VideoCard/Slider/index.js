import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0px;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    position: absolute;
    display: block; 
  }
  .slick-next {
    margin-right: 0;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    width: 298px;
    height: 197px;
  }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: true,
      infinite: true,
      speed: 210,
      arrows: true,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;