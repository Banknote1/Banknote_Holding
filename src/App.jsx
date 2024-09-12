// App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Background from './components/Background/Background';
import Navbar from './components/navbar/Navbar';


function App() {


  return (
    <Router>
      <Navbar />
      <Background />
      <div>
        <Routes>
          <Route path="/" element={<Navbar />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
