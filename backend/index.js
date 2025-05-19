const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors'); // Add this line

require('dotenv').config();

const app = express();

// Add CORS middleware before other middleware
app.use(cors({
  origin: 'http://localhost:5173', // Vite default port
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// Import routes
app.use('/users', require('./src/routes/user.route'));
app.use('/bookings', require('./src/routes/booking.route'));
app.use('/slots', require('./src/routes/parking_slot.route'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});