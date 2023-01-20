import Carousel from 'react-bootstrap/Carousel';
import black from "../images/black.webp"

function CarouselFadeExample() {
    const img_style = {
        height: "250px"
    }

  return (
    <Carousel fade>
      <Carousel.Item style = {img_style}>
        <img
          className="d-block w-100"
          src={black}
          style = {img_style}
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
          src={black}
          alt="Second slide"
          style = {img_style}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style = {img_style}>
        <img
          className="d-block w-100"
          src={black}
          style = {img_style}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;