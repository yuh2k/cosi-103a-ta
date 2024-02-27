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
          <p>Preheat your waffle iron according to the manufacturer's instructions</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>In a mixing bowl, whisk together the flour, sugar, baking powder, baking soda, and salt</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>In another bowl, whisk together buttermilk, melted butter, egg, and vanilla extract</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Fourth slide" />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Pour the wet ingredients into the dry ingredients and stir until just combined. Be careful not to overmix; a few lumps are okay</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Fifth slide" />
        <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>Lightly grease the waffle iron with cooking spray or a small amount of melted butter</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Sixth slide" />
        <Carousel.Caption>
          <h3>Sixth slide label</h3>
          <p>Pour the batter onto the preheated waffle iron and cook according to the manufacturer's instructions until the waffles are golden brown and crisp</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Seventh slide" />
        <Carousel.Caption>
          <h3>Seventh slide label</h3>
          <p> Once the waffles are ready, transfer them to a plate and top with your favorite fresh fruits </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Eighth slide" />
        <Carousel.Caption>
          <h3>Eighth slide label</h3>
          <p> Drizzle with maple syrup and enjoy your delicious waffle! </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;