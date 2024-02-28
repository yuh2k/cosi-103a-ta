import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          //src="holder.js/800x400?text=First slide&bg=f5f5f5"
          src= "oven.jpeg"
          alt="First Slide"
          style={{ width: '800px', height: '400px' }}
        />
        <Carousel.Caption>
          <h5>Preheat</h5>
          <p> Preheat the grill or grill pan over medium-high heat.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
          style={{ width: '800px', height: '400px' }}
        />
        <Carousel.Caption>
          <h5>Prepare</h5>
          <p>Season the chicken breasts with salt and pepper, and brush them lightly with olive oil.</p>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
          style={{ width: '800px', height: '400px' }}
        />
        <Carousel.Caption>
          <h5>Grill</h5>
          <p>
          Grill the chicken for about 6-8 minutes per side or until fully cooked (internal temperature reaches 165°F or 74°C).
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
          style={{ width: '800px', height: '400px' }}
        />
        <Carousel.Caption>
          <h5>Prepare the salad</h5>
          <p>
          While the chicken is grilling, </p>
          <p>prepare the salad by combining the mixed greens, cherry tomatoes, cucumber, and red onion in a large bowl.</p>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
          style={{ width: '800px', height: '400px' }}
        />
        <Carousel.Caption>
          <h5>Rest</h5>
          <p>
          Once the chicken is cooked, let it rest for a couple of minutes before slicing it into thin strips.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
          style={{ width: '800px', height: '400px' }}
        />
        <Carousel.Caption>
          <h5>Prepare</h5>
          <p>
          Arrange the sliced grilled chicken on top of the salad.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
          style={{ width: '800px', height: '400px' }}
        />
        <Carousel.Caption>
          <h5>Drizzle</h5>
      
          <p> Drizzle balsamic vinaigrette dressing over the salad and chicken.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
          style={{ width: '800px', height: '400px' }}
        />
        <Carousel.Caption>
          <h5>Serve</h5>
          <p>
          Toss everything together gently to combine.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
          style={{ width: '800px', height: '400px' }}
        />
        <Carousel.Caption>
          <h5>Serve</h5>
          <p>
          Serve immediately and enjoy!</p>
      
        </Carousel.Caption>
      </Carousel.Item>
   
    </Carousel>
  );
}

export default DarkVariantExample;