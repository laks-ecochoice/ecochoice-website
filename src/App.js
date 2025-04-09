import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import OurSolutions from './pages/OurSolution';
import Gallery from './pages/Gallery';
import Footer from './components/Footer/footer.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/solutions" element={<OurSolutions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/?scrollTo=contact" element={<Gallery />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
