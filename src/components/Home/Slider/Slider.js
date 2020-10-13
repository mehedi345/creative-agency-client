import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';

import './Slider.css';
const Slider = () => {
  return (
    <div className="carousel-container my-5">
      <h1 className="text-center mb-3"><span className="text-white">Here are some of</span> <span style={{color: "#7AB259"}}>our works</span> </h1>
      <Carousel>
     <Carousel.Item>
       <img
         className="d-block w-75 carousel-img "
         src={carousel1}
         alt="First slide"
       />

     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-75  carousel-img"
         src={carousel2}
         alt="Third slide"
       />


     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-75 carousel-img"
         src={carousel3}
         alt="Third slide"
       />

     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-75 carousel-img"
         src={carousel4}
         alt="Third slide"
       />

     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-75 carousel-img"
         src={carousel5}
         alt="Third slide"
       />

     </Carousel.Item>


   </Carousel>
    </div>
  );
};

export default Slider;