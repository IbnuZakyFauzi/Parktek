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
                {/* Logo and Navbar Links on the Left */}
                <div className="flex items-center space-x-6">
                    <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>
                        <img alt="Logo" className="w-40 h-auto object-contain" />
                    </a>

                    <ul className="flex flex-row space-x-6 font-medium text-xl">
                        <li>
                            <a
                                href="#aboutus"
                                onClick={(e) => scrollToSection(e, 'aboutus')}
                                className="text-black hover:text-color_hover1 transition cursor-pointer"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#locations"
                                onClick={(e) => scrollToSection(e, 'locations')}
                                className="text-black hover:text-color_hover1 transition cursor-pointer"
                            >
                                Locations
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Login and Registration Buttons on the Right */}
                <div className="flex space-x-4 items-center">
                    <a
                        href="login"
                        className="text-black hover:text-color_hover1 transition cursor-pointer text-lg font-semibold flex items-center"
                    >
                        Login
                    </a>
                    <a
                        href="register"
                        className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full text-lg font-semibold flex items-center transition"
                    >
                        Register
                    </a>
                </div>
            </div>
        </nav>
    );
}
