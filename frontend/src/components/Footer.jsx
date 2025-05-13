const Footer = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex-grow"></div>

      <footer className="bg-color_blue1 text-white py-8 w-full">
        <div className="max-w-7xl mx-auto px-4">
          {/* Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* PARKTEK Section */}
            <div>
              <h3 className="font-semibold text-lg">PARKTEK</h3>
              <ul>
                <li><a href="#aboutus" className="text-white hover:text-color_hover1">About Us</a></li>
                <li><a href="#promo" className="text-white hover:text-color_hover1">Promo</a></li>
                <li><a href="#locations" className="text-white hover:text-color_hover1">Locations</a></li>
                <li><a href="#career" className="text-white hover:text-color_hover1">Career</a></li>
                <li><a href="#blog" className="text-white hover:text-color_hover1">Blog</a></li>
              </ul>
            </div>

            {/* Products Section */}
            <div>
              <h3 className="font-semibold text-lg">Products</h3>
              <ul>
                <li><a href="#PARKTEKapp" className="text-white hover:text-color_hover1">PARKTEK APP</a></li>
                <li><a href="#PARKTEKos" className="text-white hover:text-color_hover1">PARKTEK OS</a></li>
                <li><a href="#onstreetparking" className="text-white hover:text-color_hover1">On Street Parking</a></li>
                <li><a href="#ticketing" className="text-white hover:text-color_hover1">PARKTEK Ticketing</a></li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="font-semibold text-lg">Legal</h3>
              <ul>
                <li><a href="#privacy" className="text-white hover:text-color_hover1">Privacy Policy</a></li>
                <li><a href="#terms" className="text-white hover:text-color_hover1">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Customer Service Section */}
            <div>
              <h3 className="font-semibold text-lg">Customer Service</h3>
              <ul>
                <li><a href="mailto:cs@PARKTEK.app" className="text-white hover:text-color_hover1">Email</a></li>
                <li><a href="#whatsapp" className="text-white hover:text-color_hover1">WhatsApp</a></li>
                <li><a href="#contact" className="text-white hover:text-color_hover1">Contact Us</a></li>
                <li><a href="#faq" className="text-white hover:text-color_hover1">FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media & Links */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white">F</a>
              <a href="https://linkedin.com" className="text-white">L</a>
              <a href="https://instagram.com" className="text-white">I</a>
            </div>
            <div className="text-sm text-center sm:text-left">© 2023 PARKTEK | PARKTEK is a trademark of PT. INOVASI ANAK INDONESIA</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;