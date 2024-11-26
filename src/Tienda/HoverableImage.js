import React, { useState } from 'react';

const HoverableImage = ({ src, alt, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      style={{
        ...style,
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
        boxShadow: isHovered ? '0 4px 10px rgba(0, 0, 0, 0.4)' : 'none', 

      }}
      onMouseEnter={() => setIsHovered(true)}  
      onMouseLeave={() => setIsHovered(false)} 
    />
  );
};

export default HoverableImage;
