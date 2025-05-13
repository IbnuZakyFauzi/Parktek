import React, { useState } from 'react';

const ParkingSlot = () => {
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [pricePerTicket] = useState(10); // Price for one parking slot
  const [total, setTotal] = useState(0);
  
  // Mock occupied slots (these could come from an API)
  const occupiedSlots = ['A1', 'B2', 'C3', 'D4', 'E5'];

  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const slotsPerRow = 8;

  // Function to handle slot selection
  const handleSlotClick = (slot) => {
    if (occupiedSlots.includes(slot)) {
      return; // Do nothing if the slot is occupied
    }

    const newSelectedSlots = [...selectedSlots];
    if (newSelectedSlots.includes(slot)) {
      // If already selected, remove it
      const index = newSelectedSlots.indexOf(slot);
      newSelectedSlots.splice(index, 1);
    } else {
      // Otherwise, add it to the selected slots
      newSelectedSlots.push(slot);
    }

    setSelectedSlots(newSelectedSlots);
    setTotal(newSelectedSlots.length * pricePerTicket);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Parking Slot Booking</h2>
        <p className="text-lg text-gray-600">Select your parking slots</p>
      </div>

      {/* Movie Info */}
      <div className="text-center mb-8">
        <select className="border py-2 px-4 rounded-md mb-4">
          <option>Select Parking Area</option>
          <option>Downtown - 2 Hours ($10)</option>
          <option>Suburb - 2 Hours ($8)</option>
        </select>
      </div>

      {/* Parking Slots Grid */}
      <div className="grid grid-cols-8 gap-2">
        {rows.map((row) => (
          <div key={row} className="flex flex-col items-center">
            {Array.from({ length: slotsPerRow }, (_, i) => {
              const slot = `${row}${i + 1}`;
              const isOccupied = occupiedSlots.includes(slot);
              const isSelected = selectedSlots.includes(slot);

              return (
                <button
                  key={slot}
                  className={`w-12 h-12 mb-2 text-white font-semibold rounded-md ${isOccupied ? 'bg-gray-400 cursor-not-allowed' : isSelected ? 'bg-blue-500' : 'bg-green-500'} ${isOccupied ? 'cursor-not-allowed' : 'hover:bg-blue-700'}`}
                  onClick={() => handleSlotClick(slot)}
                  disabled={isOccupied}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Selected Slots and Total */}
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-800">Selected Slots: {selectedSlots.length ? selectedSlots.join(', ') : 'None'}</p>
        <p className="text-lg text-gray-800">Price per Slot: ${pricePerTicket}</p>
        <p className="text-xl font-semibold text-gray-800 mt-4">Total: ${total}</p>
        <button
          className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
          disabled={selectedSlots.length === 0}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default ParkingSlot;
