import React from 'react';

const Location = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Location</h1>
      <p className="text-gray-600 text-center mb-4">
        Visit us at our location or find us on Google Maps for directions.
      </p>
      <div className="text-center">
        <a
          href="https://maps.app.goo.gl/qVWXV8WVqS3jhKaH8"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-color_blue1 text-white py-2.5 px-8 rounded-full font-medium hover:bg-blue-700 transition duration-300 inline-block"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
};

export default Location;