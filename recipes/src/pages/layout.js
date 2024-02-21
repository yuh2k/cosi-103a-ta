import {Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AddTask from './grocerylist/addgroceries.js';
import TaskList from './grocerylist/grocerylist.js';
import { TasksProvider } from './grocerylist/grocerycontext.js';



function Layout() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              <Offcanvas.Title>Grocery List</Offcanvas.Title>
              </Offcanvas.Header>
            
            <Offcanvas.Body>
                <TasksProvider>
                <AddTask />
                <TaskList />
              </TasksProvider>
            </Offcanvas.Body>
            </Offcanvas>

            </Nav>
          </Container>
        </Navbar>
        <Outlet />
      </>
      
    )
  };
export default Layout;