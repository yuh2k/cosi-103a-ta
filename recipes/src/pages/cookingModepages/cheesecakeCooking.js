import React from 'react';
import CookingMode from './cookingModeData';

const CheesecakeCooking = () => {
    const slides = [
      {
        imageUrl: 'https://www.biggerbolderbaking.com/wp-content/uploads/2017/03/1C5A0624-1.jpg',
        heading: 'Ingredients/ Mix',
        caption: [
            'In a large mixing bowl, beat the softened cream cheese until smooth.',
            'Add sugar and vanilla extract, continue beating until well combined.',
            'Add eggs one at a time, beating well after each addition.',
            'Mix in the sour cream until the batter is smooth'],
      },
      {
        imageUrl: 'https://img.taste.com.au/6NB67DIX/taste/2016/11/how-to-make-the-perfect-cheesecake-base-47605-1.jpg',
        heading: 'Prepare',
        caption: [
            'Preheat your oven to 325°F (163°C).',
            'Mix graham cracker crumbs and melted butter.',
            'Press the mixture into the bottom of a 9-inch springform pan to create the crust.',
            'Pour the cream cheese mixture over the cooled crust in the springform pan.'],
      },
      {
        imageUrl: 'https://www.onceuponachef.com/images/2017/12/Ny-Style-Cheesecake-15.jpg',
        heading: 'Baking',
        caption: [
            'Bake in the preheated oven for 50-60 minutes or until the center is set.',
            'The edges should be slightly golden, and the center should have a slight jiggle.',
            'Bake the crust in the preheated oven for 10 minutes. Remove and let it cool.'],
      },
      {
        imageUrl: 'https://assets.epicurious.com/photos/62bdc36d9de40a39de6bd598/16:9/w_6270,h_3527,c_limit/Cheesecake_RECIPE_062922_36317.jpg',
        heading: 'Serve',
        caption: [
            'Allow the cheesecake to cool in the oven with the door ajar for about an hour.',
            'Refrigerate for at least 4 hours or overnight before serving.',
            'Once chilled, run a knife around the edge of the pan before releasing the springform sides.'],
      },
      {
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/classic-cheesecake-index-642c57b4450c9.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
        heading: 'Enjoy',
        caption: [
            'Slice and serve your delicious homemade cheesecake!'],
      },
    ];
  
    return (
      <div>
        <h1>Cheescake Recipe</h1>
        <CookingMode slides={slides} />
      </div>
    );
  };
  
  export default CheesecakeCooking;