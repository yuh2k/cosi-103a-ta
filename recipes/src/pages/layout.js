import {Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import GroceryList from "./grocerylist/grocerylist";
import { Form } from 'react-bootstrap';

export default function Layout() {
  

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [recipeShow, setRecipeShow] = useState(false);
const handleRecipeClose = () => setRecipeShow(false);
const handleRecipeShow = () => setRecipeShow(true);


  
// Add a navigation bar to the layout
  return (
      <>
        <Navbar bg="light" data-bs-theme="light" sticky="top" >
          <Container>
            <Navbar.Brand to="/">😋Tasty Recipes</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/team">Meet the Team</Nav.Link>
              <Nav.Link variant="primary" onClick={handleShow}>
                Grocery List
              </Nav.Link>
              <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <p></p>
              </Offcanvas.Header>
              <Offcanvas.Body>
                  <GroceryList >
                  </GroceryList>
              </Offcanvas.Body>
            </Offcanvas>
            <Nav.Link variant="primary" onClick={handleRecipeShow}>
  Add Recipes
</Nav.Link>
<Offcanvas show={recipeShow} onHide={handleRecipeClose}>
  <Offcanvas.Header closeButton>
    <p>Add Recipes</p>
  </Offcanvas.Header>
  <Offcanvas.Body>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Recipe 1</Form.Label>
        <Form.Control type="text" placeholder="Enter recipe" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Recipe 2</Form.Label>
        <Form.Control type="text" placeholder="Enter recipe" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Recipe 3</Form.Label>
        <Form.Control type="text" placeholder="Enter recipe" />
      </Form.Group>
    </Form>
  </Offcanvas.Body>
</Offcanvas>
            </Nav>
          </Container>
        </Navbar>
        <Outlet />
      </>
      
    )
  };
