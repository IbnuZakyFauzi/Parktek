import React from 'react';
import Logo from '../components/Logo'; // Pastikan Logo diimpor dengan benar

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <Logo className="w-40 h-auto" /> {/* Menampilkan logo */}
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About PARKTEK</h1>

      {/* Description */}
      <div className="text-gray-600 text-center space-y-4">
        <p>
          PARKTEK is an innovative parking solution designed to make parking easier, faster, and more secure.
        </p>
        <p>
          With advanced technology, PARKTEK provides real-time parking updates, seamless payment options, and a secure
          system to prevent vehicle theft. Our mission is to revolutionize the parking experience for everyone.
        </p>
        <p>
          Whether you're a driver looking for a convenient parking spot or a business aiming to optimize parking
          management, PARKTEK is here to help. Join us in creating a smarter and safer parking ecosystem.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;