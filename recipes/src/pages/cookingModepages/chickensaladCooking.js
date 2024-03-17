import React from 'react';
import CookingMode from './cookingModeData';

const ChickensaladCooking = () => {
    const slides = [
      {
        imageUrl: 'https://www.cook2eatwell.com/wp-content/uploads/2019/05/Seasoned-Chicken-for-Chicken-and-Mushrooms-1024x683.jpg',
        heading: 'Prepare',
        caption: [
            'Preheat the grill or grill pan over medium-high heat.',
            'Season the chicken breasts with salt and pepper, and brush them lightly with olive oil.'],
      },
      {
        imageUrl: 'https://www.simplyrecipes.com/thmb/C2fv6xbRmNbme91hPgpIqWk1biM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-Chicken-LEAD-2-Horizontal-bb9b2a0ba23b42cf83261bd95c1c142a.jpg',
        heading: 'Grill',
        caption: [
            'Grill the chicken for about 6-8 minutes per side or until fully cooked (internal temperature reaches 165°F or 74°C). ',
            'Once the chicken is cooked, let it rest for a couple of minutes before slicing it into thin strips. '],
      },
      {
        imageUrl: 'https://assets.epicurious.com/photos/62bdc36d9de40a39de6bd598/16:9/w_6270,h_3527,c_limit/Cheesecake_RECIPE_062922_36317.jpg',
        heading: 'Prepare the salad',
        caption: [
            'While the chicken is grilling, prepare the salad by combining the mixed greens, cherry tomatoes, cucumber, and red onion in a large bowl.',
            'Arrange the sliced grilled chicken on top of the salad. Drizzle balsamic vinaigrette dressing over the salad and chicken.'],
      },
      {
        imageUrl: 'https://img.taste.com.au/NhJn9LIM/taste/2016/11/lemon-and-honey-chicken-salad-90564-1.jpeg',
        heading: 'Enjoy',
        caption: [
            'Toss everything together gently to combine.',
            'Serve immediately and enjoy!'],
      },
    ];
  
    return (
      <div>
        <h1>Chicken and Salad Recipe</h1>
        <CookingMode slides={slides} />
      </div>
    );
  };
  
  export default ChickensaladCooking;