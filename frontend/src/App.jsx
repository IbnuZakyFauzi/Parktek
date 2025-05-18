import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import Locations from './pages/Locations'; // Pastikan import ini ada
import Login from './pages/Login';
import Register from './pages/Register';
import ParkingSlot from './pages/ParkingSlot';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        
        <div className="flex-grow pt-12"> 
          {/* Routes setup */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} /> {/* Sudah sama dengan Navbar */}
            <Route path="/locations" element={<Locations />} /> {/* Pastikan baris ini ada */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/parkingslot" element={<ParkingSlot />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
