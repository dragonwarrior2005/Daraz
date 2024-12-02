import React from 'react'
import Container from 'react-bootstrap/Container';
import Slider from "react-slick";
import darazsale from '../assets/daraz11sale.webp'
import danniversary from '../assets/darazanniversary.webp'
import './banner.css'

export const Banner = () => {

  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplayspeed: 500
  };  return (
    <Container id="home">
        <Slider {...settings}>
      <div className='bannerpic'>
        <img src={darazsale} alt="" />
        <button>Buy Now</button>
      </div>
      <div className='bannerpic'>
        <img src={danniversary} alt="" />

      </div>
   
    </Slider>

    </Container>
  )
}
