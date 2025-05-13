import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'; // Import AboutUs
import Login from './pages/Login';
import Register from './pages/Register';
import TrackParking from './pages/TrackParking'; // Import halaman TrackParking
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            {/* Routes with Footer */}
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/aboutus"
              element={
                <>
                  <AboutUs />
                  <Footer />
                </>
              }
            />
            <Route
              path="/track-parking"
              element={
                <>
                  <TrackParking />
                  <Footer />
                </>
              }
            />

            {/* Routes without Footer */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;