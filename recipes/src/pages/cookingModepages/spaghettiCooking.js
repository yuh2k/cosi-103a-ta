import React from 'react';
import CookingMode from './cookingModeData';

const SpaghettiCooking = () => {
    const slides = [
      {
        imageUrl: 'https://www.instacart.com/company/wp-content/uploads/2021/10/cooking-spaghetti-1050x525.jpeg',
        heading: 'Prepare Ingredients',
        caption: [
            'Cook spaghetti according to package instructions, then drain and set aside',
            'In a pan, heat olive oil over medium heat and sauté minced garlic until fragrant'],
      },
      {
        imageUrl: 'https://www.allrecipes.com/thmb/MXcg1fSxFsQQ_dEjLe9bUDvkEsc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cayenne-Pepper-vs-Chili-Powder-3x2-1-9053e6b176074731ad78b596ec645b7d.png',
        heading: 'Add Spices and Cook',
        caption: [
            'Add red pepper flakes for a spicy kick and stir in peeled shrimp until they turn pink ',
            'Toss the cooked spaghetti into the pan, coating it in the flavorful oil',
            'Squeeze fresh lemon juice over the dish and sprinkle with chopped parsley'],
      },
      {
        imageUrl: 'https://simply-delicious-food.com/wp-content/uploads/2019/09/Shrimp-Aglio-Olio-4.jpg',
        heading: 'Enjoy!',
        caption: [
            'Serve your delicious Spaghetti Aglio e Olio with Shrimp!'],
      },
    ];
  
    return (
      <div>
        <h1>Spaghetti Aglio e Olio with Shrimp Recipe</h1>
        <CookingMode slides={slides} />
      </div>
    );
  };
  
  export default SpaghettiCooking;