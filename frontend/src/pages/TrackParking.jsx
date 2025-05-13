import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const TrackParking = () => {
  // State untuk jumlah slot parkir yang tersedia
  const [availableSlots] = useState(50); // Anda bisa mengganti ini dengan data dari backend
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk status login

  const navigate = useNavigate(); // Hook untuk navigasi

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Track Your Parking</h1>

      {/* Jika belum login */}
      {!isLoggedIn ? (
        <div className="text-center">
          <p className="text-gray-600 text-center mb-4">
            Please login to book your parking slots
          </p>
          <button
            className="bg-red-500 text-white py-2.5 px-8 rounded-full font-medium hover:bg-red-600 transition duration-300"
            onClick={() => navigate('/login')} // Navigasi ke halaman login
          >
            Login
          </button>
        </div>
      ) : (
        // Jika sudah login
        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-800 mb-6">
            Available Slots: <span className="text-green-600">{availableSlots}</span>
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Slot booked successfully!');
            }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="slotNumber" className="block text-gray-700 font-medium mb-2">
                Select Slot Number:
              </label>
              <select
                id="slotNumber"
                className="w-full px-4 py-2 border rounded-lg"
                required
              >
                {Array.from({ length: availableSlots }, (_, i) => (
                  <option key={i} value={i + 1}>
                    Slot {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-color_blue1 text-white py-2.5 px-8 rounded-full font-medium hover:bg-blue-700 transition duration-300"
            >
              Book Slot
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TrackParking;