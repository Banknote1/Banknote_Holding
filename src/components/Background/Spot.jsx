import React from 'react';

const Spot = ({ top, left, size }) => {
  const spotStyle = {
    position: 'absolute',
    top: `${top}vh`,
    left: `${left}vw`,
    width: `${size}rem`,
    height: `${size}rem`,
    borderRadius: '60.64331rem',
    background: 'rgba(153, 100, 2, 0.40)',
    filter: 'blur(120px)',
    zIndex:'1'
  };

  return <div style={spotStyle}></div>;
};

export default Spot;
