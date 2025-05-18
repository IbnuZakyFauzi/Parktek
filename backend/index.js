const express = require('express');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.use('/users', require('./src/routes/user.route'));
app.use('/bookings', require('./src/routes/booking.route'));
app.use('/slots', require('./src/routes/parking_slot.route'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
