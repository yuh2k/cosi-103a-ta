import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Recipe = ({ title, heading, image, ingredients, instructions, buttonLink, nutritionInfo }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
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
      <a href={buttonLink}><Button>Cooking Mode</Button></a>
      <Button variant="primary" onClick={handleShow}>    
        Nutritional Information
      </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Nutritional Information</Modal.Title>
            </Modal.Header>
          <Modal.Body>
            <ul>
              {nutritionInfo.map((nutritionInfo, index) => (
                <ol key={index}>{nutritionInfo}</ol>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

    </div>
  );
};

export default Recipe;