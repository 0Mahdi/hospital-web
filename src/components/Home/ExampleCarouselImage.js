import React from 'react';

const ExampleCarouselImage = ({ src, text }) => {
  return (
    <img
      className="d-block w-100"
      src={src}
      alt={text}
    />
  );
};

export default ExampleCarouselImage;
