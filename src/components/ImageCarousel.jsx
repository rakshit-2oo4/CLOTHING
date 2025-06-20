import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <img 
        src={images[currentIndex]} 
        alt={`Product image ${currentIndex + 1}`}
        className="carousel-image"
      />
      
      {images.length > 1 && (
        <>
          <button 
            className="carousel-nav carousel-prev"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            ‹
          </button>
          
          <button 
            className="carousel-nav carousel-next"
            onClick={goToNext}
            aria-label="Next image"
          >
            ›
          </button>
          
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;