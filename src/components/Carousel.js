import Carousel from 'react-bootstrap/Carousel';
import ca from '../images/cb.png'
import cv from '../images/cv.png'
import ci from '../images/ci.png'




function IndividualIntervalsExample() {
  return (
    <Carousel >
      <Carousel.Item interval={3000}>
        <img
        src={ca}
        alt=''
        className='carousel' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
        src={cv}
        alt=''
        className='carousel'
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
        src={ci}
        alt=''
        className='carousel'
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

export default IndividualIntervalsExample;