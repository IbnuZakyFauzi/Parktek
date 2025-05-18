import { Link } from 'react-router-dom';
import Logo from './Logo'; // Import komponen Logo

export default function NavBar() {
    const scrollToSection = (event, id) => {
        event.preventDefault();

        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white text-black py-4 shadow-md">
            <div className="flex justify-between items-center px-3 py-1">
                {/* Ganti a href menjadi Link */}
                <div className="flex items-center space-x-6">
                    <Link to="/" className="flex items-center">
                        <Logo className="w-40 h-auto object-contain" />
                    </Link>

                    <ul className="flex flex-row space-x-6 font-medium text-xl">
                        <li>
                            <Link
                                to="/about"
                                className="text-black hover:text-color_hover1 transition cursor-pointer"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/locations"
                                className="text-black hover:text-color_hover1 transition cursor-pointer"
                            >
                                Locations
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