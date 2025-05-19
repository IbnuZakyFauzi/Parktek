import { Link, useNavigate } from 'react-router-dom'; // Tambahkan useNavigate
import Logo from './Logo';
import { useAuth } from '../contexts/AuthContext'; // Import useAuth hook

export default function NavBar() {
    const navigate = useNavigate();
    const { currentUser, logout, isAuthenticated } = useAuth(); // Gunakan hook useAuth
    
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
    
    const handleLogout = () => {
        logout();
        navigate('/');
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
                        {/* Tambahkan menu Booking jika user sudah login */}
                        {isAuthenticated && (
                            <li>
                                <Link
                                    to="/parkingslot"
                                    className="text-black hover:text-color_hover1 transition cursor-pointer"
                                >
                                    Booking
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>

                {/* Tampilkan tombol yang berbeda berdasarkan status login */}
                <div className="flex space-x-4 items-center">
                    {isAuthenticated ? (
                        <>
                            <span className="text-black font-medium">
                                Hello, {currentUser.name}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="text-white bg-color_blue1 hover:bg-color_hover1 px-6 py-2 rounded-full text-lg font-semibold flex items-center transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}