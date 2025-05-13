import { Link } from 'react-router-dom';
import Logo from './Logo'; // Import komponen Logo

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white text-black py-0.1 shadow-md">
      <div className="flex justify-between items-center px-3 py-1">
        {/* Logo and Navbar Links on the Left */}
        <div className="flex items-center space-x-6">
          <Link to="/">
            <Logo className="w-40 h-auto object-contain" /> {/* Menggunakan komponen Logo */}
          </Link>

          <ul className="flex flex-row space-x-6 font-medium text-xl">
            <li>
              <Link
                to="/location"
                className="text-black hover:text-color_hover1 transition cursor-pointer"
              >
                Location
              </Link>
            </li>
            <li>
              <Link
                to="/track-parking"
                className="text-black hover:text-color_hover1 transition cursor-pointer"
              >
                Track Parking
              </Link>
            </li>
          </ul>
        </div>

        {/* Login and Registration Buttons on the Right */}
        <div className="flex space-x-4 items-center">
          <Link
            to="/login"
            className="text-black hover:text-color_hover1 transition cursor-pointer text-lg font-semibold flex items-center"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-white bg-color_blue1 hover:bg-color_hover1 px-6 py-2 rounded-full text-lg font-semibold flex items-center transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}