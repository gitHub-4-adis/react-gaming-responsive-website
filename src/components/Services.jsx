import React from 'react'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import img1 from '../assets/1.jpg';
import img8 from '../assets/8.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.webp';
import img9 from '../assets/9.jpg';
import img10 from '../assets/10.jpg';


const Services = () => {
  return (
    <Carousel 
      infiniteLoop
      autoPlay
      showStatus={false}
      // showArrows={false}
      showThumbs={false}
      interval={2000}

    >
      <div>
        <img src={img1} alt="image1" />
      </div>
      <div>
        <img src={img9} alt="image1" />
      </div>
      <div>
        <img src={img3} alt="image1" />
      </div>
      <div>
        <img src={img4} alt="image1" />
      </div>
      <div>
        <img src={img10} alt="image1" />
      </div>
      <div>
        <img src={img8} alt="image1" />
      </div>
    </Carousel>
  )
}

export default Services