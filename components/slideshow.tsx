'use client'
import React, { useState, useEffect } from 'react';

type SlideshowProps = {
  slides: string[];
};

const Slideshow: React.FC<SlideshowProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const selectSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="center">
      <div>
        <img 
          src={slides[currentSlide]} 
          alt={`Slide ${currentSlide}`} 
          className="w-50 h-64 object-cover"
        />
        <div className="flex justify-center mt-2 py-5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => selectSlide(index)}
              className={`mx-1 p-1 border rounded ${currentSlide === index ? 'bg-gray-300' : 'bg-white'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
