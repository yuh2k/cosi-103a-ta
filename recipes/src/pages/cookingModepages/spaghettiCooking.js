// import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function SpaghettiCooking() {
  return (
    <Carousel>
      <Carousel.Item>
      <img
          className="d-block w-100"
          //src="holder.js/800x400?text=First slide&bg=f5f5f5"
          src= "https://www.instacart.com/company/wp-content/uploads/2021/10/cooking-spaghetti-1050x525.jpeg"
          alt="First Slide"
          style={{ width: 'auto', height: '700px'}}
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
          src= "https://www.seriouseats.com/thmb/qRs2QoX-62iLbZYpUmXWcOYs6cs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__03__20150320-cooking-olive-oil-vicky-wasik-3-3666952dafbb4a7ebacbe27d17f469bc.jpg"
          alt="First Slide"
          style={{ width: 'auto', height: '700px'}}
        />
        <Carousel.Caption>
          <h3>Prepare The Pan</h3>
          <p>In a pan, heat olive oil over medium heat and sauté minced garlic until fragrant</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          //src="holder.js/800x400?text=First slide&bg=f5f5f5"
          src= "https://www.allrecipes.com/thmb/MXcg1fSxFsQQ_dEjLe9bUDvkEsc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cayenne-Pepper-vs-Chili-Powder-3x2-1-9053e6b176074731ad78b596ec645b7d.png"
          alt="First Slide"
          style={{ width: 'auto', height: '700px'}}
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
          src= "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/08/12/adding-spaghetti-to-pan-of-marinara-sauce.jpg.rend.hgtvcom.1280.1280.suffix/1660388332646.jpeg"
          alt="First Slide"
          style={{ width: 'auto', height: '700px'}}
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
          src= "https://www.foodrepublic.com/img/gallery/how-to-soften-and-juice-a-hard-lemon/l-intro-1695827847.jpg"
          alt="First Slide"
          style={{ width: 'auto', height: '700px'}}
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
          src= "https://www.azcentral.com/gcdn/-mm-/2f82cc252a818a8fd1d41b5a92d417aa5e68d6b7/c=0-0-2120-1198/local/-/media/2015/08/18/Phoenix/Phoenix/635754989298867336-ThinkstockPhotos-464945723.jpg?width=2120&height=1198&fit=crop&format=pjpg&auto=webp"
          alt="First Slide"
          style={{ width: 'auto', height: '700px'}}
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
          src= "https://simply-delicious-food.com/wp-content/uploads/2019/09/Shrimp-Aglio-Olio-4.jpg"
          alt="First Slide"
          style={{ width: 'auto', height: '700px'}}
        />
        <Carousel.Caption>
          <h3>Enjoy!</h3>
          <p>Serve your delicious Spaghetti Aglio e Olio with Shrimp!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SpaghettiCooking;