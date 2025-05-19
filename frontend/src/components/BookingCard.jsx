import React from 'react';
import Card from './Card';
import Button from './Button';

const BookingCard = ({ booking, onPay, showPayButton = false }) => {
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getStatusBadge = (status) => {
    const statusColors = {
      pending: 'bg-yellow-100 text-yellow-800',
      booked: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
      completed: 'bg-blue-100 text-blue-800',
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status] || 'bg-gray-100 text-gray-800'}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <Card className="mb-4">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex-grow">
          <div className="flex justify-between mb-2">
            <div>
              <h4 className="text-lg font-semibold">Booking #{booking.id}</h4>
              <p className="text-sm text-gray-600">Slot: {booking.slot_id}</p>
            </div>
            <div>{getStatusBadge(booking.status)}</div>
          </div>

          <div className="mb-2">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Start:</span> {formatDate(booking.start_time)}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">End:</span> {formatDate(booking.end_time)}
            </p>
          </div>

          <div className="mb-3">
            <p className="text-sm font-medium text-gray-900">Price: ${booking.price || 0}</p>
            {booking.is_paid && (
              <p className="text-xs text-green-600">Paid on {formatDate(booking.paid_at)}</p>
            )}
          </div>
          
          {showPayButton && !booking.is_paid && booking.status === 'pending' && (
            <Button onClick={() => onPay(booking.id)} variant="success" className="mt-2">
              Pay Now
            </Button>
          )}
        </div>
        
        {booking.qr_code_url && (
          <div className="mt-4 md:mt-0 md:ml-4">
            <img 
              src={booking.qr_code_url} 
              alt="Booking QR Code" 
              className="h-24 w-24 object-contain"
            />
          </div>
        )}
      </div>
    </Card>
  );
};

export default BookingCard;
