import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Cook spaghetti according to package instructions, then drain and set aside</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>In a pan, heat olive oil over medium heat and sauté minced garlic until fragrant</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Add red pepper flakes for a spicy kick and stir in peeled shrimp until they turn pink</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Fourth slide" />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Toss the cooked spaghetti into the pan, coating it in the flavorful oil</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Fifth slide" />
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>Squeeze fresh lemon juice over the dish and sprinkle with chopped parsley</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Sixth slide" />
        <Carousel.Caption>
          <h3>Sixth slide label</h3>
          <p>Season with salt and pepper</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Seventh slide" />
        <Carousel.Caption>
          <h3>Seventh slide label</h3>
          <p>Serve your delicious Spaghetti Aglio e Olio with Shrimp!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;