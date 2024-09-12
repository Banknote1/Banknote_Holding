import React, { useState, useEffect } from 'react';
import Spot from './Spot';

const Background = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const cornerPositions = [
      { top: 0, left: -5 },       // Top-left corner
        { top: 0, left: 90 },
      { top: 35, left: -10 },      // Bottom-left corner
        // Top-right corner
      { top: 90, left: -5 },      // Bottom-left corner
      { top: 90, left: 90 }      // Bottom-right corner
    ];

    const newSpots = cornerPositions.map(position => ({
      ...position,
      size: Math.random() * 20 + 15 // Random size between 5rem and 15rem
    }));

    setSpots(newSpots);
  }, []);

  return (
    <div style={backgroundStyle}>
      {spots.map((spot, index) => (
        <Spot key={index} top={spot.top} left={spot.left} size={spot.size} />
      ))}
    </div>
  );
};

const backgroundStyle = {
  position: 'relative',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'black',
  overflow: 'hidden',
};

export default Background;

