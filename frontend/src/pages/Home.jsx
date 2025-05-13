import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Kenapa pakai PARKTEK?</h2>
      </div>

      {/* Feature Cards - Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Track Your Parking Card */}
        <div className="bg-red-50 rounded-xl p-10 flex flex-col items-center shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Track Your Parking</h3>
          <p className="text-gray-600 text-center mb-6">Real-time parking location updates on the go.</p>
          <Link
            to="/parkingslot"  // Use Link to navigate to ParkingSlot page
            className="bg-color_blue1 text-white py-2.5 px-8 rounded-full font-medium hover:bg-blue-700 transition duration-300 w-48"
          >
            Track Now
          </Link>
        </div>

        {/* Download App Card */}
        <div className="bg-blue-50 rounded-xl p-10 flex flex-col items-center shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Download the App</h3>
          <p className="text-gray-600 text-center mb-6">Get the PARKEE App for a seamless experience.</p>
          <button
            className="bg-color_blue1 text-white py-2.5 px-8 rounded-full font-medium hover:bg-blue-700 transition duration-300 w-48"
          >
            Download
          </button>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Feature 1 */}
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="inline-block p-3 rounded-full bg-red-100 text-red-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Faster</h3>
          <p className="text-gray-600">Faster payment authorization takes a few seconds</p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="inline-block p-3 rounded-full bg-yellow-100 text-yellow-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Various Payment Methods</h3>
          <p className="text-gray-600">E-money cards, QRIS, and e-wallets supported</p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="inline-block p-3 rounded-full bg-blue-100 text-blue-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Dashboard</h3>
          <p className="text-gray-600">Comprehensive digital financial reports</p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="inline-block p-3 rounded-full bg-green-100 text-green-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Competent IT Support</h3>
          <p className="text-gray-600">Experienced team in the parking industry</p>
        </div>

        {/* Feature 5 */}
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="inline-block p-3 rounded-full bg-purple-100 text-purple-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">More Secure</h3>
          <p className="text-gray-600">Prevent vehicle theft with app verification</p>
        </div>

        {/* Feature 6 */}
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="inline-block p-3 rounded-full bg-orange-100 text-orange-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Manless Parking System</h3>
          <p className="text-gray-600">Location supervision with technology</p>
        </div>
      </div>

      {/* Learn more button */}
      <div className="text-center mt-16">
        <button
          className="bg-color_blue1 text-white py-3 px-10 rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300"
        >
          Learn PARKTEK
        </button>
      </div>
    </div>
  );
};

export default Home;
