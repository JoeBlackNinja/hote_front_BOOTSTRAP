import NavBar from './NavBar'
import LabelDown from './LabelDown';
import AboutUs from './AboutUs';

import { Col, Container, Row } from 'react-bootstrap';

export const Enrutador = (props) => {
  return (
    <Container className='mainContainer' fluid>         

        <Row className='mt-1'>         
          <Col xs={12} className='containerHeader'>
            <NavBar/>
          </Col>
        </Row >

        <Row >
          <Col xs={12} className='carrouselContainer'>
            {props.renderizador}
          </Col>
        </Row>

        <Row>
          <Col xs={7} md={9} className="colFooter">
            <LabelDown message={"Our rates may vary directly with the exchange parity in the different currencies"}/>            
          </Col>
          <Col xs={5} md={2} className="colFooter">
            <LabelDown message={"Visit our privacy notice"}/>            
          </Col>
        </Row>
                   
                
      </Container>
  )
}
