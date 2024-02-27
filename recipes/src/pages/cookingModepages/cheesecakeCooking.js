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
          <p>Preheat your oven to 325°F (163°C).</p>
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
          <p>Mix graham cracker crumbs and melted butter. </p>
          <p>Press the mixture into the bottom of a 9-inch springform pan to create the crust.</p>
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
          <p>
          Bake the crust in the preheated oven for 10 minutes. Remove and let it cool.
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
          In a large mixing bowl, beat the softened cream cheese until smooth.</p>
          <p> Add sugar and vanilla extract, continue beating until well combined.</p>
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
          <h5>Mix</h5>
          <p>
           Add eggs one at a time, beating well after each addition. Mix in the sour cream until the batter is smooth
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
          Pour the cream cheese mixture over the cooled crust in the springform pan.
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
          <h5>Bake</h5>
          <p>
          Bake in the preheated oven for 50-60 minutes or until the center is set.</p>
          <p> The edges should be slightly golden, and the center should have a slight jiggle.
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
          Allow the cheesecake to cool in the oven with the door ajar for about an hour.</p>
          <p> Refrigerate for at least 4 hours or overnight before serving.
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
          Once chilled, run a knife around the edge of the pan before releasing the springform sides.</p>
      
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
          <p>
          Slice and serve your delicious homemade cheesecake!</p>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;