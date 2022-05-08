import logo from "../images/backpackers-logos_white.png";

import { Button, Navbar, Nav, FormLabel } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar className="NavBar">
      <Navbar.Brand>
        <img src={logo} className="textLog" />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/home" className="textNavBar">
          Home
        </Nav.Link>
        <Nav.Link href="/about" className="textNavBar">
          About Us
        </Nav.Link>
        <Nav.Link href="/reservation" className="textNavBar">
          Reservation
        </Nav.Link>
        <Nav.Link href="/bills" className="textNavBar">
          Bills
        </Nav.Link>
        <Nav.Link href="/statistics" className="textNavBar">
          Statistics
        </Nav.Link>
        <Nav.Link href="/anomalies" className="textNavBar">
          Anomalies
        </Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/login">
          <Button variant="outline-light" size="lg" className="botonLogin">
            LOG IN
          </Button>
        </Nav.Link>
        <Nav.Link href="/signup">
          <Button variant="light" size="lg" className="botonLogin">
            SIGN UP
          </Button>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
