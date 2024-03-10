import Carousel from 'react-bootstrap/Carousel';

function CinnamonrollsCooking() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://whitneybond.com/2015/04/15/baked-puff-pastry-monte-cristo/img_0175-3/"
          alt="First Slide"
          style={{ width: 'auto', height: '800px' }}
        />
        <Carousel.Caption>
          <h5>Ingredients/Prepare</h5>
          <p> Preheat your oven according to the puff pastry package instructions.</p>
          <p>Roll out the puff pastry sheet on a lightly floured surface. Brush the melted butter over the entire surface of the pastry.
          Sprinkle brown sugar evenly over the buttered pastry.  Dust the cinnamon over the sugar layer.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.thepalatablelife.com/wp-content/uploads/2022/12/brown-butter-cinnamon-rolls-scaled.jpg"
          alt="Third slide"
          style={{ width: 'auto', height: '800px' }}
        />
        <Carousel.Caption>
          <h5>Prepare</h5>
          <p>Roll the pastry sheet tightly into a log.
            Cut the log into 1-inch slices and place them on a baking sheet lined with parchment paper.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.ndtv.com/cooks/images/cinnamon.rolls.2.jpg"
          alt="Third slide"
          style={{ width: 'auto', height: '800px' }}
        />
        <Carousel.Caption>
          <h5>Bake</h5>
          <p> Bake in the preheated oven for the time specified on the puff pastry package or until the rolls are golden brown.</p>
          <p> (Optional) Mix powdered sugar with a small amount of milk to create a simple icing. Drizzle over the warm cinnamon rolls.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.seriouseats.com/thmb/gyEKwPkXpvas4zeUCIvnMG498Ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-bravetart-homemade-cinnamon-rolls-recipe-hero-04-df109d751ac34d1e8ee91a2a9e15dd9e.jpg"
          alt="Last slide"
          style={{ width: 'auto', height: '800px' }}
        />
        <Carousel.Caption>
          <h5>Enjoy!</h5>
          <p>Dig into your warm cinnamon rolls!</p>
        </Carousel.Caption>
      </Carousel.Item>
   
    </Carousel>
  );
}

export default CinnamonrollsCooking;