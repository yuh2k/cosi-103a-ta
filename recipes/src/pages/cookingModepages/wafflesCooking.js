import React from 'react';
import CookingMode from './cookingModeData';

const SpaghettiCooking = () => {
    const slides = [
      {
        imageUrl: 'https://content.instructables.com/FJH/668J/IM7YSOOA/FJH668JIM7YSOOA.jpg?auto=webp&fit=bounds&frame=1&height=1024&width=1024auto=webp&frame=1&height=150',
        heading: 'Preheat Iron',
        caption: [
            "Preheat your waffle iron according to the manufacturer's instructions"],
      },
      {
        imageUrl: 'https://www.allrecipes.com/thmb/MXcg1fSxFsQQ_dEjLe9bUDvkEsc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cayenne-Pepper-vs-Chili-Powder-3x2-1-9053e6b176074731ad78b596ec645b7d.png',
        heading: 'Mix Together',
        caption: [
            'In a mixing bowl, whisk together the flour, sugar, baking powder, baking soda, and salt',
            'In another bowl, whisk together buttermilk, melted butter, egg, and vanilla extract',
            'Pour the wet ingredients into the dry ingredients and stir until just combined. Be careful not to overmix; a few lumps are okay'],
      },
      {
        imageUrl: 'https://akm-img-a-in.tosshub.com/sites/dailyo//resources/202308/output-z9b2to240823115638.gif',
        heading: 'Make Waffles',
        caption: [
            'Lightly grease the waffle iron with cooking spray or a small amount of melted butter',
            "Pour the batter onto the preheated waffle iron and cook according to the manufacturer's instructions until the waffles are golden brown and crisp"],
      },
      {
        imageUrl: 'https://www.dish-works.com/wp-content/uploads/2019-8_PAE_Waffle_1920_GIF_v2-SM.gif',
        heading: 'Enjoy!',
        caption: [
            '(Optional) Once the waffles are ready, transfer them to a plate and top with your favorite fresh fruits',
            'Drizzle with maple syrup and enjoy your delicious waffle!'],
      },
    ];
  
    return (
      <div>
        <h1>Waffle Recipe</h1>
        <CookingMode slides={slides} />
      </div>
    );
  };
  
  export default SpaghettiCooking;