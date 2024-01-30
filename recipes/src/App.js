// Import necessary dependencies
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import waffles from "./Belgian-Waffles-4.jpg";


// Your App component
function App() {
  return (
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. Dessert: Fruit Topped Waffles </Accordion.Header>
        <Accordion.Body>
       <h2> Ingredients:</h2>
       <p>1 cup all-purpose flour </p>
       <p>1 tablespoon sugar </p>
       <p>1 teaspoon baking powder </p>
       <p>1/2 teaspoon baking soda</p>
       <p>1/4 teaspoon salt</p>
       <p>1 cup buttermilk</p>
       <p>1/4 cup unsalted butter, melted</p>
       <p>1 large egg</p>
       <p>1 teaspoon vanilla extract</p>
       <p>Fresh fruits (strawberries, blueberries, bananas, etc.)</p>
       <p>Maple syrup or powdered sugar for drizzling</p>
       <h2>Instructions:</h2>
       <p>1. Preheat your waffle iron according to the manufacturer's instructions.</p>
       <p>2. In a mixing bowl, whisk together the flour, sugar, baking powder, baking soda, and salt.</p>
       <p>3. In another bowl, whisk together buttermilk, melted butter, egg, and vanilla extract.</p>
       <p>4. Pour the wet ingredients into the dry ingredients and stir until just combined. Be careful not to overmix; a few lumps are okay.</p>
       <p>5. Lightly grease the waffle iron with cooking spray or a small amount of melted butter.</p>
       <p>6. Pour the batter onto the preheated waffle iron and cook according to the manufacturer's instructions until the waffles are golden brown and crisp.</p>
       <p>7. Once the waffles are ready, transfer them to a plate and top with your favorite fresh fruits.</p>
       <p>8. Drizzle with maple syrup and enjoy your delicious waffle!</p>
       <img src= {waffles} alt= "waffles" width="250px"></img>


        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. Dessert : Cinnamon Rolls</Accordion.Header>
        <Accordion.Body>
          <h2>Ingredients:</h2>
          <p>1 sheet of store-bought puff pastry</p>
          <p>2 tablespoons melted butter</p>
          <p> 1/4 cup of brown sugar</p>
          <p>1 teaspoon ground cinnamon</p>
          <p>Icing (optional): Powdered sugar and a little milk</p>
          <h2>Instructions:</h2>
          <p>1. Preheat your oven according to the puff pastry package instructions.</p>
          <p>2. Roll out the puff pastry sheet on a lightly floured surface</p>
          <p>3. Brush the melted butter over the entire surface of the pastry.</p>
          <p>4. Sprinkle brown sugar evenly over the buttered pastry.</p>
          <p>5. Dust the cinnamon over the sugar layer.</p>
          <p>6. Roll the pastry sheet tightly into a log.</p>
          <p>7. Cut the log into 1-inch slices and place them on a baking sheet lined with parchment paper.</p>
          <p>8. Bake in the preheated oven for the time specified on the puff pastry package or until the rolls are golden brown.</p>
          <p>9. Optional: Mix powdered sugar with a small amount of milk to create a simple icing. Drizzle over the warm cinnamon rolls.</p>
          <p>10. Dig into your warm cinnamon rolls!</p>
       
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>3. Dessert: Cheesecake</Accordion.Header>
        <Accordion.Body>
         <h2>Ingredients:</h2>
         <p>2 cups graham cracker crumbs</p>
         <p>1/2 cup unsalted butter, melted</p>
         <p>4 packages (8 oz each) cream cheese, softened</p>
         <p>1 cup granulated sugar</p>
         <p>1 teaspoon vanilla extract</p>
         <p>4 large eggs</p>
         <p>1 cup sour cream</p>
         <h3>Instructions:</h3>
         <p>1. Preheat your oven to 325°F (163°C).</p>
         <p>2. Mix graham cracker crumbs and melted butter. Press the mixture into the bottom of a 9-inch springform pan to create the crust.</p>
         <p>3. Bake the crust in the preheated oven for 10 minutes. Remove and let it cool.</p>
         <p>4. In a large mixing bowl, beat the softened cream cheese until smooth. Add sugar and vanilla extract, continue beating until well combined.</p>
         <p>5. Add eggs one at a time, beating well after each addition. Mix in the sour cream until the batter is smooth.</p>
         <p>6. Pour the cream cheese mixture over the cooled crust in the springform pan.</p>
         <p>7. Bake in the preheated oven for 50-60 minutes or until the center is set. The edges should be slightly golden, and the center should have a slight jiggle.</p>
         <p>8. Allow the cheesecake to cool in the oven with the door ajar for about an hour. Refrigerate for at least 4 hours or overnight before serving.</p>
         <p>9. Once chilled, run a knife around the edge of the pan before releasing the springform sides.</p>
         <p>10. Slice and serve your delicious homemade cheesecake!</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>4. Dinner: Grilled Chicken and Salad:</Accordion.Header>
        <Accordion.Body>
          <h2>Ingredients:</h2>
          <p>2 boneless, skinless chicken breasts</p>
          <p>Salt and pepper to taste</p>
          <p>Olive oil</p>
          <p>Mixed salad greens (lettuce, spinach, arugula, etc.)</p>
          <p>Cherry tomatoes, halved</p>
          <p>Cucumber, sliced</p>
          <p>Red onion, thinly sliced</p>
          <p>Balsamic vinaigrette dressing</p>
          <h2>Instructions:</h2>
          <p>1. Preheat the grill or grill pan over medium-high heat.</p>
          <p>2. Season the chicken breasts with salt and pepper, and brush them lightly with olive oil.</p>
          <p>3. Grill the chicken for about 6-8 minutes per side or until fully cooked (internal temperature reaches 165°F or 74°C).</p>
          <p>4. While the chicken is grilling, prepare the salad by combining the mixed greens, cherry tomatoes, cucumber, and red onion in a large bowl.</p>
          <p>5. Once the chicken is cooked, let it rest for a couple of minutes before slicing it into thin strips.</p>
          <p>6. Arrange the sliced grilled chicken on top of the salad.</p>
          <p>7. Drizzle balsamic vinaigrette dressing over the salad and chicken.</p>
          <p>8. Toss everything together gently to combine.</p>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Recipe #5</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Recipe #6</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Recipe #7</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default App;