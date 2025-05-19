import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import BookingCard from '../components/BookingCard';
import Loading from '../components/Loading';
import api from '../api/axios';

const HistoryPage = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchBookingHistory();
  }, []);
  const fetchBookingHistory = async () => {
    setIsLoading(true);
    try {
      // Get user bookings - using the user ID from auth/me or just get all user bookings
      const response = await api.get('/bookings/user');
      
      if (response.data && response.data.data) {
        // Sort bookings by start_time in descending order (newest first)
        const sortedBookings = response.data.data.sort(
          (a, b) => new Date(b.start_time) - new Date(a.start_time)
        );
        setBookings(sortedBookings);
      } else {
        setError('Failed to load booking history');
      }
    } catch (error) {
      console.error('Error fetching booking history:', error);
      setError('An error occurred while fetching your booking history');
    } finally {
      setIsLoading(false);
    }
  };
  const handlePayment = async (bookingId) => {
    setIsLoading(true);
    try {
      const response = await api.post(`/bookings/pay/${bookingId}`);
      
      if (response.data && response.data.status === 'success') {
        // Update the booking in the list
        setBookings(bookings.map(booking => 
          booking.id === bookingId ? { ...booking, ...response.data.data } : booking
        ));
        alert('Payment successful!');
      } else {
        alert(response.data.message || 'Payment failed');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert(error.response?.data?.message || 'An error occurred during payment');
    } finally {
      setIsLoading(false);
    }
  };

  const filteredBookings = bookings.filter(booking => {
    if (filter === 'all') return true;
    return booking.status === filter;
  });

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Loading />
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Booking History</h1>

        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              All Bookings
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === 'pending'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilter('booked')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === 'booked'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Booked
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === 'completed'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setFilter('cancelled')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === 'cancelled'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Cancelled
            </button>
          </div>
        </div>

        {filteredBookings.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No bookings found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBookings.map((booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
                onPay={handlePayment}
                showPayButton={booking.status === 'pending' && !booking.is_paid}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HistoryPage;
