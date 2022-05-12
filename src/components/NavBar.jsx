import logo from "../images/backpackers-logos_white.png";

import { Button, Navbar, Nav, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = (props) => {
  const [log, setLog] = useState(false);

  useEffect(() => {
    let loggin = localStorage.getItem('client');
    if(loggin){
      setLog(true);
    }
  }, [props])
  

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
        <Link to="/services" className="textNavBar">
          Services
        </Link>
      </Nav>
      <Nav>
        <Link to="/login">
          <Button 
            variant="outline-light" 
            size="lg" 
            className="botonLogin"
            hidden={log}
          >LOG IN / SIGN UP</Button>
        </Link>
        {/* <Link to="/signup">
          <Button variant="light" size="lg" className="botonLogin">
            SIGN UP
          </Button>
        </Link> */}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
