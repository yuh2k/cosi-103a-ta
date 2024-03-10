// import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
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
          <h3>Make the Spaghetti</h3>
          <p>Cook spaghetti according to package instructions, then drain and set aside</p>
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
          <h3>Perpare The Pan</h3>
          <p>In a pan, heat olive oil over medium heat and sauté minced garlic until fragrant</p>
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
          <h3>Add Some Spices</h3>
          <p>Add red pepper flakes for a spicy kick and stir in peeled shrimp until they turn pink</p>
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
          <h3>Add In The Spaghetti</h3>
          <p>Toss the cooked spaghetti into the pan, coating it in the flavorful oil</p>
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
          <h3>Add Some Stuff On Top</h3>
          <p>Squeeze fresh lemon juice over the dish and sprinkle with chopped parsley</p>
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
          <h3>Seasonings</h3>
          <p>Season with salt and pepper</p>
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
          <h3>Enjoy!</h3>
          <p>Serve your delicious Spaghetti Aglio e Olio with Shrimp!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;