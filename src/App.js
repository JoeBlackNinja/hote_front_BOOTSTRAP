import './App.css';

import NavBar from '../src/components/NavBar'
import { LabelDown } from './components/LabelDown';

import { 
  Col,
  Container,
  Row
} from 'react-bootstrap';
import { Carrousel } from './components/Carrousel';


function App() {
  return (    
      <Container className='mainContainer' fluid>             
        <Row className='containerHeader'>
          <Col xs={12} >
            <NavBar/>
          </Col>
          <Col xs={12} className='carrouselStyle'>
            <Carrousel/>
          </Col>
          <Col xs={11} md={9} className="colFooter">
          <LabelDown message={"Our rates may vary directly with the exchange parity in the different currencies"}/>            
          </Col>
          <Col xs={11} md={2} className="colFooter">
            <LabelDown message={"Visit our privacy notice"}/>            
          </Col>
         
        </Row >
        

        

        {/* <Container fluid>
          <Row>
            <Col xs={12} className='carrouselStyle'>
              <Carrousel/>
            </Col>
          </Row>
        </Container> */}

           

          
        
          
        

        
          
        
      </Container>
  
  );
}

export default App;
