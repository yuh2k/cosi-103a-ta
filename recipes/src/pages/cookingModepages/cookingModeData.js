import React from 'react';
import {Button, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CookingMode = ({ slides }) => {
    const carouselSlides = slides.map((slide, index) => (
      <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={slide.imageUrl}
          alt={`Slide ${index + 1}`}
        />
        <Carousel.Caption>
          <h3>{slide.heading}</h3>
          <p>{slide.caption}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ));
  
    return (
      <Carousel>
        {carouselSlides}
      </Carousel>
    );
  };
  
  export default CookingMode;