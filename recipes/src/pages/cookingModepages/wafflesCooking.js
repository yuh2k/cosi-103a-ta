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
      <img
          className="d-block w-100"
          //src="holder.js/800x400?text=First slide&bg=f5f5f5"
          src= "oven.jpeg"
          alt="First Slide"
          style={{ width: '800px', height: '400px' }}
        />
        <Carousel.Caption>
          <h3>Preheat Iron</h3>
          <p>Preheat your waffle iron according to the manufacturer's instructions</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          //src="holder.js/800x400?text=First slide&bg=f5f5f5"
          src= "oven.jpeg"
          alt="First Slide"
          style={{ width: '800px', height: '400px' }}
        />
        <Carousel.Caption>
          <h3>Mix Together</h3>
          <p>In a mixing bowl, whisk together the flour, sugar, baking powder, baking soda, and salt</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          //src="holder.js/800x400?text=First slide&bg=f5f5f5"
          src= "oven.jpeg"
          alt="First Slide"
          style={{ width: '800px', height: '400px' }}
        />
        <Carousel.Caption>
          <h3>Mix Some More</h3>
          <p>In another bowl, whisk together buttermilk, melted butter, egg, and vanilla extract</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          //src="holder.js/800x400?text=First slide&bg=f5f5f5"
          src= "oven.jpeg"
          alt="First Slide"
          style={{ width: '800px', height: '400px' }}
        />
        <Carousel.Caption>
          <h3>Combine ingredients</h3>
          <p>Pour the wet ingredients into the dry ingredients and stir until just combined. Be careful not to overmix; a few lumps are okay</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          //src="holder.js/800x400?text=First slide&bg=f5f5f5"
          src= "oven.jpeg"
          alt="First Slide"
          style={{ width: '800px', height: '400px' }}
        />
        <Carousel.Caption>
          <h3>Grease Iron</h3>
          <p>Lightly grease the waffle iron with cooking spray or a small amount of melted butter</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          //src="holder.js/800x400?text=First slide&bg=f5f5f5"
          src= "oven.jpeg"
          alt="First Slide"
          style={{ width: '800px', height: '400px' }}
        />
        <Carousel.Caption>
          <h3>Make Waffles</h3>
          <p>Pour the batter onto the preheated waffle iron and cook according to the manufacturer's instructions until the waffles are golden brown and crisp</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          //src="holder.js/800x400?text=First slide&bg=f5f5f5"
          src= "oven.jpeg"
          alt="First Slide"
          style={{ width: '800px', height: '400px' }}
        />
        <Carousel.Caption>
          <h3>Add Toppings</h3>
          <p> Once the waffles are ready, transfer them to a plate and top with your favorite fresh fruits </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          //src="holder.js/800x400?text=First slide&bg=f5f5f5"
          src= "oven.jpeg"
          alt="First Slide"
          style={{ width: '800px', height: '400px' }}
        />
        <Carousel.Caption>
          <h3>Enjoy</h3>
          <p> Drizzle with maple syrup and enjoy your delicious waffle! </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;