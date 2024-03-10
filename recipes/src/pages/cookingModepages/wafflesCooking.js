import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
      <img
          className="d-block w-100"
          //src="holder.js/800x400?text=First slide&bg=f5f5f5"
          src= "https://content.instructables.com/FJH/668J/IM7YSOOA/FJH668JIM7YSOOA.jpg?auto=webp&fit=bounds&frame=1&height=1024&width=1024auto=webp&frame=1&height=150"
          alt="First Slide"
          style={{ width: "auto" , height: '700px' }}
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
          src= "https://images.squarespace-cdn.com/content/v1/5a44331764b05f1c833e4d32/1568388150952-GXYI0WRLV3N2GG779SQ3/IMG_1261.jpg"
          alt="First Slide"
          style={{ width: "auto" , height: '700px' }}
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
          src= "https://images.squarespace-cdn.com/content/v1/5a44331764b05f1c833e4d32/1568388201178-WCEXBK98LRSODM1DJOD3/IMG_1256.jpg"
          alt="First Slide"
          style={{ width: "auto" , height: '700px' }}
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
          src= "https://i2.wp.com/bakerbettie.com/wp-content/uploads/2018/04/how-to-make-muffins-3-280x280.jpg"
          alt="First Slide"
          style={{ width: "auto" , height: '700px' }}
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
          src= "https://farm3.staticflickr.com/2907/14551074185_3c6c1e6303.jpg"
          alt="First Slide"
          style={{ width: "auto" , height: '700px' }}
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
          src= "https://akm-img-a-in.tosshub.com/sites/dailyo//resources/202308/output-z9b2to240823115638.gif"
          alt="First Slide"
          style={{ width: "auto" , height: '700px' }}
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
          src= "https://www.krusteaz.com/wp-content/uploads/2021/06/KR_St_BelgianWaffle_5_6141.jpg"
          alt="First Slide"
          style={{ width: "auto" , height: '700px' }}
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
          src= "https://www.dish-works.com/wp-content/uploads/2019-8_PAE_Waffle_1920_GIF_v2-SM.gif"
          alt="First Slide"
          style={{ width: "auto" , height: '700px' }}
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