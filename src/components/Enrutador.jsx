import NavBar from './NavBar'
import LabelDown from './LabelDown';

import { 
  Col,
  Container,
  Row
} from 'react-bootstrap';

import { Carrousel } from './Carrousel';


export const Enrutador = (props) => {
  return (
    <Container className='mainContainer' fluid>             
        <Row className='containerHeader'>
          <Col xs={12} >
            <NavBar/>
          </Col>
          <Col xs={12} className='carrouselStyle'>
            {props.renderizador}
          </Col>
          <Col xs={11} md={9} className="colFooter">
          <LabelDown message={"Our rates may vary directly with the exchange parity in the different currencies"}/>            
          </Col>
          <Col xs={11} md={2} className="colFooter">
            <LabelDown message={"Visit our privacy notice"}/>            
          </Col>         
        </Row >        
      </Container>
  )
}
