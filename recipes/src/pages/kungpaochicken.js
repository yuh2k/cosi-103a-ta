import kungpaochicken from "./images/kungpaochicken.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


const Cheesecake = () => {
    return (
      <div>
        <h1>Sichuan Kung Pao Chicken 宫保鸡 Recipe</h1>
        
          <img class="page_img" src={kungpaochicken} alt="kung pao chicken"/>
          <h2>Ingredients:</h2>
          <ul>
            <li>1 lb boneless, skinless chicken breasts, cut into bite-sized pieces</li>
            <li>2 tablespoons soy sauce</li>
            <li>1 tablespoon rice vinegar</li>
            <li>1 tablespoon hoisin sauce</li>
            <li>1 tablespoon cornstarch</li>
            <li>1 tablespoon vegetable oil</li>
            <li>3 cloves garlic, minced</li>
            <li>1 teaspoon ginger, minced</li>
            <li>1/2 cup unsalted peanuts</li>
            <li>2 green onions, sliced</li>
            <li>1/2 cup diced red bell pepper</li>
            <li>1/2 cup diced green bell pepper</li>
            <li>1/4 cup water</li>
            <li>2 tablespoons chili garlic sauce (adjust to taste)</li>
            <li>Cooked rice for serving</li>
          </ul>
          <h2>Instructions:</h2>
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
            <Link to="/cookingModepages/kungpaoCooking">
              <Button>Cooking Mode</Button>
            </Link>
      </div>
    )
  };
  
  export default Cheesecake;