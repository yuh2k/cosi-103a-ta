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
            <h3>Sauté Vegetables</h3>
            <p>Sauté Vegetables</p>
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
            <h3>Oil Pan</h3>
            <p>Heat olive oil in a large skillet over medium heat</p>
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
            <h3>Add Onions</h3>
            <p>Add finely chopped onions and cook until they become translucent</p>
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
            <h3>Add Peppers</h3>
            <p>Add chopped green peppers to the skillet and sauté until they soften</p>
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
            <h3>Add Tomatoes</h3>
            <p>Stir in chopped tomatoes and cook until they release their juices and start to break down</p>
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
            <h3>Add Spices</h3>
            <p>Season the mixture with salt and pepper to taste. Add red pepper flakes if you like prefer it spicy</p>
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
            <h3>Scooping Time</h3>
            <p> Make four wells in the vegetable mixture using a spoon</p>
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
            <h3>Add The Eggs</h3>
            <p> Crack an egg into each well. Allow the eggs to cook until the whites are set but the yolks are still runny</p>
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
            <h3>Let Cook Longer</h3>
            <p> Cover the skillet and cook for a few more minutes until the egg whites are fully cooked, or cook longer if you prefer firmer yolks</p>
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
            <h3>Add Some Parsley</h3>
            <p> Sprinkle chopped fresh parsley over the top and serve immediately</p>
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
            <h3>Eat Some Good Food</h3>
            <p> Enjoy your freshly made Turkish Menemen!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ControlledCarousel;