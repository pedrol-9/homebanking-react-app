import React from 'react';
import { Carousel } from 'antd';

const Carrusel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    { img: '/assets/imgs/modern.jpg'},
    { img: '/assets/imgs/cheerfulWomanBlue.jpg' },
		{ img: '/assets/imgs/collage.jpg'},
    { img: '/assets/imgs/cheerfulWomanOrange.jpg' },
    { img: '/assets/imgs/bannerAzulOscuro.avif' },
  ];

  return (
    <Carousel {...settings}>
      {images.map((image, index) => (
        <div key={index} className='h-[540px]'>
          <img src={image.img} alt={`banner ${index}`} className='w-full h-[500px] object-cover rounded-xl' />
        </div>
      ))}
    </Carousel>
  );
};

export default Carrusel;
