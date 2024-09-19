// App.jsx
import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import 'bootstrap/dist/js/bootstrap.bundle.js';
// import Background from './components/Background/Background';
import Navbar from './components/navbar/Navbar';
import Landing from './components/landing_page/landing';
import Spot from './components/Background/Spot'

function App() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const cornerPositions = [
      { top: 0, left: -5 }, // Top-left corner
      { top: 0, left: 90 },
      { top: 35, left: -10 }, // Bottom-left corner
      // Top-right corner
      { top: 200, left: -5 }, // Bottom-left corner
      { top: 90, left: 90 },
      { top: 200, left: 90 }, // Bottom-right corner
      { top: 300, left: 90 },
      { top: 310, left: -10 },
      { top: 320, left: 90 },
      { top: 420, left: -5 },
      { top: 380, left: 90 },
    ];

    const newSpots = cornerPositions.map(position => ({
      ...position,
      size: Math.random() * 40 + 15 // Random size between 5rem and 15rem
    }));

    setSpots(newSpots);
  }, []);

  return (
    <Router>
      {/* */}
      {/* <Background /> */}
      <div className='background-container backgroundStyle' >
      {/* <Navbar />       */}
      {spots.map((spot, index) => (
        <Spot key={index} top={spot.top} left={spot.left} size={spot.size} />
      ))}
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}


export default App;
