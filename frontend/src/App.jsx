import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

import AboutUs from './pages/AboutUs';
import Locations from './pages/Locations';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        
        <div className="flex-grow pt-12 "> 
          {/* Define the routes for different pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/locations" element={<Locations />} />
            {/* Add more routes here */}
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;