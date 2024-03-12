import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
    return (
      <Carousel>
       
        <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://media.istockphoto.com/id/186768677/photo/pouring-eating-oil-in-frying-pan.jpg?s=612x612&w=0&k=20&c=Eo_Gj0fs1XErqTGWgIzd-8yYm20dSwjMqKv2BYH2AuE="
          alt="First Slide"
          style={{ width: 'auto', height: '800px'}}
        />
          <Carousel.Caption>
            <h3>Oil Pan</h3>
            <p>Heat olive oil in a large skillet over medium heat</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://i0.wp.com/aflavorjournal.com//wp-content/uploads/2019/03/caramelized-onions-6-1024x731.jpg?resize=1024%2C731&ssl=1"
          alt="First Slide"
          style={{ width: 'auto', height: '800px'}}
        />
          <Carousel.Caption>
            <h3>Add Onions</h3>
            <p>Add finely chopped onions and cook until they become translucent</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://sundaysuppermovement.com/wp-content/uploads/2023/10/sauteed-peppers-and-onions-hero.jpg"
          alt="First Slide"
          style={{ width: 'auto', height: '800px'}}
        />
          <Carousel.Caption>
            <h3>Add Peppers</h3>
            <p>Add chopped green peppers to the skillet and sauté until they soften</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://live.staticflickr.com/959/27316272337_155cf86839_b.jpg"
          alt="First Slide"
          style={{ width: 'auto', height: '800px'}}
        />
          <Carousel.Caption>
            <h3>Add Tomatoes</h3>
            <p>Stir in chopped tomatoes and cook until they release their juices and start to break down</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://www.budgetbytes.com/wp-content/uploads/2018/10/Homemade-Cajun-Seasoning-H-mix.jpg"
          alt="First Slide"
          style={{ width: 'auto', height: '800px'}}
        />
          <Carousel.Caption>
            <h3>Add Spices</h3>
            <p>Season the mixture with salt and pepper to taste. Add red pepper flakes if you like prefer it spicy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://sowthetable.com/wp-content/uploads/2021/10/E97108BC-464E-4CFC-A007-7B4A6A75EE59_1_201_a-1080x720.webp"
          alt="First Slide"
          style={{ width: 'auto', height: '800px'}}
        />
         <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://www.grocery.coop/sites/default/files/NCG_Dennis_Becker_Menemen_715_x_477.jpg"
          alt="First Slide"
          style={{ width: 'auto', height: '800px'}}
        />
          <Carousel.Caption>
            <h3>Sauté Vegetables</h3>
            <p>Sauté Vegetables</p>
          </Carousel.Caption>
        </Carousel.Item>
          <Carousel.Caption>
            <h3>Scooping Time</h3>
            <p> Make four wells in the vegetable mixture using a spoon</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://image.milimaj.com/i/milliyet/75/0x0/5f46f0135542821134f67099.jpg"
          alt="First Slide"
          style={{ width: 'auto', height: '800px'}}
        />
          <Carousel.Caption>
            <h3>Add The Eggs</h3>
            <p> Crack an egg into each well. Allow the eggs to cook until the whites are set but the yolks are still runny</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBbnUoS6Goa7zJn1j7tlnmUPbdz2O2m4isQ&usqp=CAU"
          alt="First Slide"
          style={{ width: 'auto', height: '800px'}}
        />
          <Carousel.Caption>
            <h3>Let Cook Longer</h3>
            <p> Cover the skillet and cook for a few more minutes until the egg whites are fully cooked, or cook longer if you prefer firmer yolks</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://post.healthline.com/wp-content/uploads/2020/01/parsley-herb-1296x728-header-1296x728.jpg"
          alt="First Slide"
          style={{ width: 'auto', height: '800px'}}
        />
          <Carousel.Caption>
            <h3>Add Some Parsley</h3>
            <p> Sprinkle chopped fresh parsley over the top and serve immediately</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://piquantpost.com/cdn/shop/articles/CzFGt1CWq7c2ZOW6MstOt_1000x.jpg?v=1624050448"
          alt="First Slide"
          style={{ width: 'auto', height: '800px'}}
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