import React from "react";
import { Carousel } from 'antd';
const contentStyle = {
    margin: 0,
    height: '93vh',
    color: '#fff',
    lineHeight: '100px',
    textAlign: 'center',
    background: '#364d79',
  };
  const TempCarousel = () => {
    console.log('Carousel Loaded!');
    const onChange = (currentSlide) => {
      console.log(currentSlide);
    };
    return (
    <div>
      <Carousel afterChange={onChange} dotPosition="top">
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
    );
  }
export default TempCarousel;