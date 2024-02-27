import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Preheat your oven to 325°F (163°C)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Mix graham cracker crumbs and melted butter. Press the mixture into the bottom of a 9-inch springform pan to create the crust</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Bake the crust in the preheated oven for 10 minutes. Remove and let it cool </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Fourth slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>In a large mixing bowl, beat the softened cream cheese until smooth. Add sugar and vanilla extract, continue beating until well combined</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Fifth slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Add eggs one at a time, beating well after each addition. Mix in the sour cream until the batter is smooth</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Sixth slide" /> */}
        <Carousel.Caption>
          <h3>Sixth slide label</h3>
          <p>Pour the cream cheese mixture over the cooled crust in the springform pan</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Seventh slide" /> */}
        <Carousel.Caption>
          <h3>Seventh slide label</h3>
          <p> Bake in the preheated oven for 50-60 minutes or until the center is set. The edges should be slightly golden, and the center should have a slight jiggle </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Eighth slide" /> */}
        <Carousel.Caption>
          <h3>Eighth slide label</h3>
          <p> Allow the cheesecake to cool in the oven with the door ajar for about an hour. Refrigerate for at least 4 hours or overnight before serving </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Ninth slide" /> */}
        <Carousel.Caption>
          <h3>Ninth slide label</h3>
          <p> Once chilled, run a knife around the edge of the pan before releasing the springform sides </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Tenth slide" /> */}
        <Carousel.Caption>
          <h3>Tenth slide label</h3>
          <p> Slice and serve your delicious homemade cheesecake! </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;