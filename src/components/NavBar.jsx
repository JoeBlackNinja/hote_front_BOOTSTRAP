import logo from "../images/backpackers-logos_white.png";

import { Button, Navbar, Nav, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className="NavBar">
      <Navbar.Brand>
      <Link to="/home" className="textNavBar">
        <img src={logo} className="textLog" />
      </Link>
      </Navbar.Brand>
      <Nav className="me-auto">

        <Link to="/about" className="textNavBar">
          About Us
        </Link>
        <Link to="/reservation" className="textNavBar">
          Reservation
        </Link>
        <Link to="/bills" className="textNavBar">
          Bills
        </Link>
        <Link to="/statistics" className="textNavBar">
          Statistics
        </Link>
        <Link to="/anomalies" className="textNavBar">
          Anomalies
        </Link>
        <Link to="/anomalies" className="textNavBar">
          Services
        </Link>
      </Nav>
      <Nav>
        <Link to="/login">
          <Button variant="outline-light" size="lg" className="botonLogin">
            LOG IN
          </Button>
        </Link>
        <Link to="/signup">
          <Button variant="light" size="lg" className="botonLogin">
            SIGN UP
          </Button>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
