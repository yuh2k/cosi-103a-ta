import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
       <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.biggerbolderbaking.com/wp-content/uploads/2017/03/1C5A0624-1.jpg"
          alt="First slide"
          style={{ width: 'auto', height: '800px'}}
        />
        <Carousel.Caption>
          <h5>Ingredients/ Mix</h5>
          <p> In a large mixing bowl, beat the softened cream cheese until smooth.</p>
          <p> Add sugar and vanilla extract, continue beating until well combined.</p>
          <p>Add eggs one at a time, beating well after each addition. 
            Mix in the sour cream until the batter is smooth </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.wikihow.com/images/thumb/a/a6/Preheat-an-Oven-Step-12-Version-3.jpg/v4-460px-Preheat-an-Oven-Step-12-Version-3.jpg"
          alt="Second slide"
          style={{ width: 'auto', height: '800px' }}
        />
        <Carousel.Caption>
          <h5>Prepare</h5>
          <p>Preheat your oven to 325°F (163°C).</p>
          <p>Mix graham cracker crumbs and melted butter. </p>
          <p>Press the mixture into the bottom of a 9-inch springform pan to create the crust.</p>
          <p>Pour the cream cheese mixture over the cooled crust in the springform pan.</p>
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
          <h5>Bake</h5>
          <p>Bake in the preheated oven for 50-60 minutes or until the center is set.</p>
          <p>The edges should be slightly golden, and the center should have a slight jiggle.</p>
          <p>Bake the crust in the preheated oven for 10 minutes. Remove and let it cool.</p>
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
          <p>Allow the cheesecake to cool in the oven with the door ajar for about an hour.</p>
          <p> Refrigerate for at least 4 hours or overnight before serving.</p>
          <p> Once chilled, run a knife around the edge of the pan before releasing the springform sides.</p>
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
          <h5>Enjoy!</h5>
          <p>Slice and serve your delicious homemade cheesecake!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;