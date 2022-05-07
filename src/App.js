import './App.css';
import logo from '../src/images/backpackers-logos_white.png';

import { 
  Button, 
  Col,
  Container,
  Navbar,
  Nav,
  Row
} from 'react-bootstrap';

function App() {
  return (    
      <Container className='mainContainer' fluid>
        <Row className='Header'>      
          <Col xs={12}>
            <Navbar className='rowNavBar'>
            <Navbar.Brand className='Nav.Link.margin'>
                <img src={logo} className='textLog'/>
            </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/home">
                  <label className='textNavBar'>Home</label>
                </Nav.Link>
                <Nav.Link href="#features">
                  <label className='textNavBar'>About Us</label>
                </Nav.Link>
                <Nav.Link href="#pricing">
                  <label className='textNavBar'>Reservation</label>
                </Nav.Link>
                <Nav.Link href="#pricing">
                  <label className='textNavBar'>Bills</label>
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link 
                    href=''
                  ><Button 
                    variant='outline-light'
                    size='lg'
                  >LOG IN</Button>
                </Nav.Link>
              </Nav>
          </Navbar>            
          </Col> 

          <Col xs={12} className='bodyStyle'>
            <h1>asdasd</h1>
          </Col>

        </Row>

        
          
        
      </Container>
  
  );
}

export default App;
