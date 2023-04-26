import React, { useState, useEffect } from 'react';
import './Carousel.css';
const Carousel = ({ images,names }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change the duration (in milliseconds) as desired

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (

    <div className="carousel  ">
        <p className='caro'>Tech i Have Worked with</p>
        <div className='carousel-image'>
      <img src={images[currentIndex]} alt="Carousel" className="carousel-ima" />
        </div>
        <div className='par'>

            <p>
      {names[currentIndex]}
            </p>
        </div>
    </div>
  );
};

export default Carousel;
