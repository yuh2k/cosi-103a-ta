import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function KungpaoCooking() {
  return (
    <Carousel>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src= "https://recipes.net/wp-content/uploads/2024/02/what-is-chicken-marinade-1707280127.jpg"
          alt="First Slide"
          style={{ width: 'auto', height: '800px' }}
        />
        <Carousel.Caption>
          <h3>Ingredients/Mix</h3>
          <p>In a bowl, combine soy sauce, rice vinegar, hoisin sauce, and cornstarch.
             Add the chicken pieces and marinate for about 15-20 minutes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src= "https://www.seriouseats.com/thmb/V6jpNqeVGW39ZoTTUhauUPXSbO8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__04__20150413-cashew-chicken-ding-shao-zhong-6-189cd45d88cb484988a753b5dbc37a28.jpg"
          alt="Second Slide"
          style={{ width: 'auto', height: '800px' }}
        />
        <Carousel.Caption>
          <h3>Cook</h3>
        <p>Heat vegetable oil in a wok or large skillet over medium-high heat. 
          Add minced garlic and ginger, sauté for about 30 seconds until fragrant.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src= "https://4.bp.blogspot.com/---y9A1imNJ0/VOYViE_pUJI/AAAAAAAASYs/ZG-GVrbm0mQ/s1600/IMG_9713.JPG"
          alt="Third Slide"
          style={{ width: 'auto', height: '800px' }}
        />
        <Carousel.Caption>
          <h3>While Cooking</h3>
          <p>Add marinated chicken to the wok and stir-fry until browned and cooked through.
          Add diced red and green bell peppers, peanuts, and sliced green onions. </p>
          <p>Pour in water and chili garlic sauce. Stir-fry for another 1-2 minutes until the sauce thickens.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src= "https://assets.epicurious.com/photos/62d550372ce044d81614427d/16:9/w_5482,h_3083,c_limit/KungPaoChicken_RECIPE_071422_37114.jpg"
          alt="Last Slide"
          style={{ width: 'auto', height: '800px' }}
        />
        <Carousel.Caption>
          <h3>Serve and Enjoy</h3>
          <p>Serve the Kung Pao chicken with cooked rice.</p>
          <p>Dig in to your home cooked Sichuan Kung Pao Chicken!</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}

export default KungpaoCooking;