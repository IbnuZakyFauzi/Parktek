const bookingController = require('../controllers/booking.controller');
const authMiddleware = require('../middlewares/auth');
const express = require('express');
const router = express.Router();

router.post('/add', authMiddleware.authenticateJWT, bookingController.createBooking);
router.get('/all', authMiddleware.authenticateJWT, bookingController.getAllBookings);
// router.put('/update/:id', authMiddleware.authenticateJWT, bookingController.updateBooking);
// router.delete('/delete/:id', authMiddleware.authenticateJWT, bookingController.deleteBooking);
router.get('/:id', authMiddleware.authenticateJWT, bookingController.getBookingById);
router.get('/user/:id', bookingController.getBookingbyUserId);
router.post('/cancel/:id', authMiddleware.authenticateJWT, bookingController.cancelBooking);
// router.get('/user/:id', authMiddleware.authenticateJWT, bookingController.getBookingbyUserId);

module.exports = router;