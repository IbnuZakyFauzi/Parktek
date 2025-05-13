import React from 'react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      {/* New clickable content sections outside the grid */}
      <div className="grid gap-6">
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 text-center bg-red-100 rounded-lg p-8 shadow-lg">
          <div className="text-4xl text-red-500 mb-4">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Track Your Parking</h3>
          <p className="text-gray-600">Real-time parking location updates on the go.</p>
          <a
            href="#track"
            className="inline-block bg-color_blue1 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-red-600 transition"
          >
            Track Now
          </a>
        </div>

        <div className="col-span-1 sm:col-span-2 lg:col-span-1 text-center bg-blue-100 rounded-lg p-8 shadow-lg">
          <div className="text-4xl text-blue-500 mb-4">
            <i className="fas fa-download"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Download the App</h3>
          <p className="text-gray-600">Get the PARKEE App for a seamless experience.</p>
          <a
            href="#download"
            className="inline-block bg-color_blue1 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-red-600 transition"
          >
            Download
          </a>
        </div>
      </div>
      <div className="text-center mb-12">
      </div>
        <h2 className="text-3xl font-semibold text-gray-800">Kenapa pakai PARKTEK?</h2>

      {/* Original content sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
        {/* Existing content sections */}
        <div className="text-center">
          <div className="text-4xl text-red-500 mb-4">
            <i className="fas fa-tachometer-alt"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Faster</h3>
          <p className="text-gray-600">Faster payment authorization takes a few seconds</p>
        </div>

        <div className="text-center">
          <div className="text-4xl text-yellow-500 mb-4">
            <i className="fas fa-credit-card"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Various Payment Methods</h3>
          <p className="text-gray-600">Various payment systems are available: e-money cards, QRIS, and e-wallets</p>
        </div>

        <div className="text-center">
          <div className="text-4xl text-blue-500 mb-4">
            <i className="fas fa-chart-line"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Digital Dashboard</h3>
          <p className="text-gray-600">Comprehensive digital financial reports</p>
        </div>

        <div className="text-center">
          <div className="text-4xl text-green-500 mb-4">
            <i className="fas fa-users-cog"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Competent IT Support</h3>
          <p className="text-gray-600">Competent and experienced IT support team in the parking industry</p>
        </div>

        <div className="text-center">
          <div className="text-4xl text-purple-500 mb-4">
            <i className="fas fa-lock"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">More Secure</h3>
          <p className="text-gray-600">Prevent vehicle theft with PARKTEK App verification</p>
        </div>

        <div className="text-center">
          <div className="text-4xl text-orange-500 mb-4">
            <i className="fas fa-parking"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Manless Parking System</h3>
          <p className="text-gray-600">Parking location supervision with technology</p>
        </div>
      </div>

      {/* Learn more section */}
      <div className="text-center mt-8">
        <a
          href="#learn-more"
          className="inline-block bg-color_blue1 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-red-600 transition"
        >
          Learn PARKTEK
        </a>
      </div>
    </div>
  );
};

export default Home;
