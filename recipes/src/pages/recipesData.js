import React from 'react';

const Recipe = ({ title, heading, image, ingredients, instructions, buttonLink }) => {
  return (
    <div className="recipe">
      <title>{title}</title>
      <h2>{heading}</h2>
      <img height={100} width= {100} src={image} alt={title} />
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ul>
        {instructions.map((instruction, index) => (
          <ol key={index}>{instruction}</ol>
        ))}
      </ul>
      <a href={buttonLink}><button>Cooking Mode</button></a>
    </div>
  );
};

export default Recipe;