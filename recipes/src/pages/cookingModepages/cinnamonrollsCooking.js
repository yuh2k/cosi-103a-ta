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
          <p> Preheat your oven according to the puff pastry package instructions.</p>
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
          <p>Roll out the puff pastry sheet on a lightly floured surface</p>
         
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
          Brush the melted butter over the entire surface of the pastry.</p>
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
          <h5>Sprinkle sugar</h5>
          <p>
          Sprinkle brown sugar evenly over the buttered pastry.</p>
        
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
          Dust the cinnamon over the sugar layer.
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
          Roll the pastry sheet tightly into a log.
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
      
          <p> Cut the log into 1-inch slices and place them on a baking sheet lined with parchment paper.
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
          Bake in the preheated oven for the time specified on the puff pastry package or until the rolls are golden brown.
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
          <h5>Optional</h5>
          <p>
           Mix powdered sugar with a small amount of milk to create a simple icing. Drizzle over the warm cinnamon rolls.</p>
      
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
          Dig into your warm cinnamon rolls!</p>
      
        </Carousel.Caption>
      </Carousel.Item>
   
    </Carousel>
  );
}

export default DarkVariantExample;