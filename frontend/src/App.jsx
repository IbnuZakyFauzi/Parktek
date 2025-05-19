import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import Locations from './pages/Locations';
import Login from './pages/Login';
import Register from './pages/Register';
import ParkingSlot from './pages/ParkingSlot';
import Dashboard from './pages/Dashboard'; // Import dashboard page
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Komponen untuk menentukan halaman home berdasarkan status login
const HomeRouter = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Dashboard /> : <Home />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          
          <div className="flex-grow pt-12"> 
            <Routes>
              {/* Route utama yang akan menampilkan Home atau Dashboard */}
              <Route path="/" element={<HomeRouter />} />
              
              {/* Routes biasa */}
              <Route path="/about" element={<AboutUs />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Route untuk pengguna yang sudah login */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/parkingslot" element={<ParkingSlot />} />
            </Routes>
          </div>
          
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;