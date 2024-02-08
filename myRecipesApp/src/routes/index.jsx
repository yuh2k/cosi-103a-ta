import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import waffles from "./images/waffles.jpg";
import cheesecake from "./images/cheesecake.jpg";
import chickensalad from "./images/chickensalad.jpg";
import cinnamonrolls from "./images/cinnamonrolls.jpg";
import kungpaochicken from "./images/kungpaochicken.jpeg";
import agliolio from "./images/spaghetti.jpeg";
import menemen from "./images/menemen.jpeg"; 


import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './card.css';

export default function Index() {
    return (
      <CardGroup class="cards">
      <Card>
        <Card.Img variant="top" src={menemen} width="150px"/>
        <Card.Body>
          <Card.Title>Menemen</Card.Title>
          <Card.Text>
            Scrambled eggs with tomatoes, peppers, and spices.
          </Card.Text>
        <a href="Menemen.html">
        <Button>Go To Recipe</Button>
        </a>
        </Card.Body>
      </Card>

      <Card >
        <Card.Img variant="top" src={waffles} height="150px"/>
        <Card.Body>
          <Card.Title>Belgian Waffles</Card.Title>
          <Card.Text>
            Description of recipe
          </Card.Text>
          <a href="Waffles.html">
            <Button>Go To Recipe</Button>
          </a>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={cheesecake} width="150px"/>
        <Card.Body>
          <Card.Title>Cheesecake</Card.Title>
          <Card.Text>
              Sweet and rich dessert
              perfect for any occasion!
              <p> 
              <br></br> 
              </p>
              
          </Card.Text>
          <a href="Cheesecake.html">
            <Button>Go To Recipe</Button>
          </a>
        </Card.Body>
      </Card>

      <Card >
        <Card.Img variant="top" src={chickensalad} width="150px"/>
        <Card.Body>
          <Card.Title>Chicken Salad</Card.Title>
          <Card.Text>
            Delicious, healthy, and 
            quick recipe for on the go!
          </Card.Text>
          <a href="Chickensalad.html">
            <Button>Go To Recipe</Button>
          </a>
        </Card.Body>
      </Card>

      <Card >
        <Card.Img variant="top" src={kungpaochicken} width="150px"/>
        <Card.Body>
          <Card.Title>Kung Pao Chicken</Card.Title>
          <Card.Text>
            Description of recipe
          </Card.Text>
          <a href="kungpaochicken.html">
            <Button>Go To Recipe</Button>
          </a>
        </Card.Body>
      </Card>

      <Card >
        <Card.Img variant="top" src={cinnamonrolls} width="150px"/>
        <Card.Body>
          <Card.Title>Cinnamon Rolls</Card.Title>
          <Card.Text>
            Description of recipe
          </Card.Text>
         <a href="CinnamonRolls.html">
            <Button>Go To Recipe</Button>
          </a>
        </Card.Body>
      </Card>

      <Card >
        <Card.Img variant="top" src={agliolio} width="150px"/>
        <Card.Body>
          <Card.Title>Shrimp Aglio Olio</Card.Title>
          <Card.Text>
            Description of recipe
          </Card.Text>
          <a href="spagetti.html">
            <Button>Go To Recipe</Button>
          </a>
        </Card.Body>
      </Card>
    </CardGroup>
    );
  }
