import { Carousel } from "react-bootstrap";

import Imagen1 from '../images/carousel/1.jpg';
import Imagen2 from '../images/carousel/2.jpg';
import Imagen3 from '../images/carousel/3.jpg';
import Imagen4 from '../images/carousel/4.jpg';
import Imagen5 from '../images/carousel/5.jpg';
import Imagen6 from '../images/carousel/6.jpg';

export const Carrousel = () => {
  return (
    <Carousel className="carrouselStyle">

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen1}
          width="800px"
          height="800px"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen2}
          width="800px"
          height="800px"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen3}
          width="800px"
          height="800px"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen4}
          width="800px"
          height="800px"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen5}
          width="800px"
          height="800px"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen6}
          width="800px"
          height="800px"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
};
