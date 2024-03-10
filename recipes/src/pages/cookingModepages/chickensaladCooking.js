import Carousel from 'react-bootstrap/Carousel';

function ChickensaladCooking() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://www.cook2eatwell.com/wp-content/uploads/2019/05/Seasoned-Chicken-for-Chicken-and-Mushrooms-1024x683.jpg"
          alt="First Slide"
          style={{ width: 'auto', height: '800px'}}
        />
        <Carousel.Caption>
          <h5>Prepare</h5>
          <p>Preheat the grill or grill pan over medium-high heat.</p>
          <p>Season the chicken breasts with salt and pepper, and brush them lightly with olive oil.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.simplyrecipes.com/thmb/C2fv6xbRmNbme91hPgpIqWk1biM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-Chicken-LEAD-2-Horizontal-bb9b2a0ba23b42cf83261bd95c1c142a.jpg"
          alt="Second slide"
          style={{ width: 'auto', height: '800px'}}
        />
        <Carousel.Caption>
          <h5>Grill</h5>
          <p>Grill the chicken for about 6-8 minutes per side or until fully cooked (internal temperature reaches 165°F or 74°C). </p>
          <p>Once the chicken is cooked, let it rest for a couple of minutes before slicing it into thin strips. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://zealzeal.com/cdn/shop/products/zeal-g217_26cm-two-toned-salad-bowl-in-cream_lifestyle_2000x2000.jpg?v=1632148072"
          alt="Third slide"
          style={{ width: 'auto', height: '800px'}}
        />
        <Carousel.Caption>
          <h5>Prepare the salad</h5>
          <p>While the chicken is grilling, prepare the salad by combining the mixed greens, cherry tomatoes, cucumber, and red onion in a large bowl.</p>
          <p>Arrange the sliced grilled chicken on top of the salad. Drizzle balsamic vinaigrette dressing over the salad and chicken.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.taste.com.au/NhJn9LIM/taste/2016/11/lemon-and-honey-chicken-salad-90564-1.jpeg"
          alt="Fourth slide"
          style={{ width: 'auto', height: '800px'}}
        />
        <Carousel.Caption>
          <h5>Serve</h5>
          <p>Toss everything together gently to combine.</p>
          <p>Serve immediately and enjoy!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ChickensaladCooking;