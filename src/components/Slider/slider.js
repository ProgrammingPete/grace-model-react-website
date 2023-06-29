import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import './slider.css';

function Slider({ slides }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    // console.log('selected index: ', selectedIndex)
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index}
              onSelect={handleSelect}
    >
      {slides.map((slide) => (
        <Carousel.Item key={slide.img}>
          <img
            className="d-block w-100"
            src={slide.img}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;