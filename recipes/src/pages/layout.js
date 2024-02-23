import {Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Add a navigation bar to the layout
const Layout = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" sticky="top" >
        <Container>
          <Navbar.Brand to="/">😋Tasty Recipes</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <Nav.Link href="/team">Meet the Team</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

      <Outlet />
    </>
  )
};

export default Layout;