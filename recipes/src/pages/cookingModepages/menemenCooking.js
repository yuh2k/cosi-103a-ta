import React from 'react';
import CookingMode from './cookingModeData';

const MenemenCooking = () => {
    const slides = [
      {
        imageUrl: 'https://media.istockphoto.com/id/186768677/photo/pouring-eating-oil-in-frying-pan.jpg?s=612x612&w=0&k=20&c=Eo_Gj0fs1XErqTGWgIzd-8yYm20dSwjMqKv2BYH2AuE=',
        heading: 'Oil Pan',
        caption: [
            'Heat olive oil in a large skillet over medium heat'],
      },
      {
        imageUrl: 'https://i0.wp.com/aflavorjournal.com//wp-content/uploads/2019/03/caramelized-onions-6-1024x731.jpg?resize=1024%2C731&ssl=1',
        heading: 'Add Ingredients',
        caption: [
            'Add finely chopped onions and cook until they become translucent ',
            'Add chopped green peppers to the skillet and sauté until they soften',
            'Stir in chopped tomatoes and cook until they release their juices and start to break down',
            'Season the mixture with salt and pepper to taste. Add red pepper flakes if you like prefer it spicy'],
      },
      {
        imageUrl: 'https://www.grocery.coop/sites/default/files/NCG_Dennis_Becker_Menemen_715_x_477.jpg',
        heading: 'Sauté Vegetables',
        caption: [
            'Sauté Vegetables and make four wells in the vegetable mixture using a spoon ',
            'Add diced red and green bell peppers, peanuts, and sliced green onions.',
            'Pour in water and chili garlic sauce. Stir-fry for another 1-2 minutes until the sauce thickens.'],
      },
      {
        imageUrl: 'https://image.milimaj.com/i/milliyet/75/0x0/5f46f0135542821134f67099.jpg',
        heading: 'Add Eggs',
        caption: [
            'Crack an egg into each well. Allow the eggs to cook until the whites are set but the yolks are still runny',
            'Cover the skillet and cook for a few more minutes until the egg whites are fully cooked, or cook longer if you prefer firmer yolks'],
      },
      {
        imageUrl: 'https://piquantpost.com/cdn/shop/articles/CzFGt1CWq7c2ZOW6MstOt_1000x.jpg?v=1624050448',
        heading: 'Serve and Enjoy!',
        caption: [
            'Sprinkle chopped fresh parsley over the top and serve immediately',
            'Enjoy your freshly made Turkish Menemen!'],
      },
    ];
  
    return (
      <div>
        <h1>Menemen Recipe</h1>
        <CookingMode slides={slides} />
      </div>
    );
  };
  
  export default MenemenCooking;