import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <div>
    <Carousel >
    <Carousel.Item interval={1000}>
      <img width={'70%'} height={300}
        className="d-block w-100"
        src="./img/first.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img width={'70%'} height={300}
        className="d-block w-100"
        src="./img/second.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Slider