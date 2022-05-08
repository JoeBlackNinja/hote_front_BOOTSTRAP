import { Carousel } from "react-bootstrap";

import Imagen1 from '../images/carousel/1.jpg';
import Imagen2 from '../images/carousel/2.jpg';
import Imagen3 from '../images/carousel/3.jpg';
import Imagen4 from '../images/carousel/4.jpg';
import Imagen5 from '../images/carousel/5.jpg';
import Imagen6 from '../images/carousel/6.jpg';

import '../App.css'

export const Carrousel = () => {
  return (
    <Carousel className="carrouselStyle">

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen2}
          width="800px"
          height="800px"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Comfortable rooms</h3>
          <p>If rest and attention are your thing, our comfortable rooms are for you.</p>
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
          <h3>Camping area</h3>
          <p>You can enjoy our camping area at low cost.</p>
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
          <h3>Share Rooms</h3>
          <p>
          If your thing is to meet interesting people, lovers of adventure, our shared rooms are for you.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagen1}
          width="800px"
          height="800px"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Dining room</h3>
          <p>Coffee, delicious food and people from all over the world await you in our dining room.</p>
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
          <h3>PET friendly</h3>
          <p>Come and register with your pet. We have an area for dogs, cats, ferrets, hedgehogs and hamsters.</p>
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
          <h3>Hostel Friendly</h3>
          <p>At BackPackers hostel we are friendly with all kinds of people, tastes and preferences. Having as main policy zero tolerance to any type of discrimination.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
};
