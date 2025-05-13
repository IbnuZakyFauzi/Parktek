const Footer = () => {
  return (
    <footer className="bg-color_blue1 text-white py-6 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-8 text-center">
          {/* PARKTEK Column */}
          <div>
            <h3 className="font-semibold text-xl mb-4">PARKTEK</h3>
            <ul className="space-y-2">
              <li><a href="#aboutus" className="text-white hover:text-color_hover1">About Us</a></li>
              <li><a href="#locations" className="text-white hover:text-color_hover1">Locations</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="text-white hover:text-color_hover1">Privacy Policy</a></li>
              <li><a href="#terms" className="text-white hover:text-color_hover1">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div>
            <h3 className="font-semibold text-lg">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="mailto:cs@parkee.app" className="text-white hover:text-color_hover1">Email</a></li>
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
          <div className="text-sm text-center sm:text-left">
            © 2023 PARKEE | PARKEE is a trademark of PT. INOVASI ANAK INDONESIA
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;