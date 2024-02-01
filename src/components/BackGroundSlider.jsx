import React from 'react';
import Slider from 'react-slick';

const BackGroundSlider = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <Slider {...settings} className="background-slider">
      {images.map((image, index) => (
        <div key={index} className="background-slide">
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default BackGroundSlider;
