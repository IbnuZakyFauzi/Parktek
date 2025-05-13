const bookingRepo = require("../repositories/booking.repo");
const parkingSlotRepo = require("../repositories/parking_slot.repo");
const userRepo = require("../repositories/user.repo");
const baseResponse = require("../utils/baseResponse.util");

exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await bookingRepo.getAllBookings();
        return res.status(200).json(baseResponse.success("Bookings fetched successfully", bookings));
    } catch (error) {
        console.error("Error fetching bookings", error);
        return res.status(500).json(baseResponse.error("Internal server error"));
    }
}

exports.getBookingById = async (req, res) => {
    const { id } = req.params;

    try {
        const booking = await bookingRepo.getBookingById(id);
        if (!booking) {
            return res.status(404).json(baseResponse.error("Booking not found"));
        }
        return res.status(200).json(baseResponse.success("Booking fetched successfully", booking));
    } catch (error) {
        console.error("Error fetching booking", error);
        return res.status(500).json(baseResponse.error("Internal server error"));
    }
}

exports.getBookingbyUserId = async (req, res) => {
    const { id } = req.params;

    try {
        const booking = await bookingRepo.getBookingByUserId(id);
        if (!booking) {
            return res.status(404).json(baseResponse.error("Booking not found"));
        }
        return res.status(200).json(baseResponse.success("Booking fetched successfully", booking));
    } catch (error) {
        console.error("Error fetching booking", error);
        return res.status(500).json(baseResponse.error("Internal server error"));
    }
}

exports.cancelBooking = async (req, res) => {
    const { user_id } = req.user.id; // Assuming user ID is available in req.user
    const { id } = req.params;

    try {
        const booking = await bookingRepo.getBookingById(id);
        if (!booking) {
            return res.status(404).json(baseResponse.error("Booking not found"));
        }

        if (booking.user_id !== user_id) {
            return res.status(403).json(baseResponse.error("You are not authorized to cancel this booking"));
        }

        const cancelledBooking = await bookingRepo.cancelBooking(id);
        return res.status(200).json(baseResponse.success("Booking cancelled successfully", cancelledBooking));
    } catch (error) {
        console.error("Error cancelling booking", error);
        return res.status(500).json(baseResponse.error("Internal server error"));
    }
}

exports.payBooking = async (req, res) => {
    const { user_id } = req.user.id; // Assuming user ID is available in req.user
    const { id } = req.params;

    try {
        const booking = await bookingRepo.getBookingById(id);
        if (!booking) {
            return res.status(404).json(baseResponse.error("Booking not found"));
        }

        if (booking.user_id !== user_id) {
            return res.status(403).json(baseResponse.error("You are not authorized to pay for this booking"));
        }

        const paidBooking = await bookingRepo.payBooking(id);
        return res.status(200).json(baseResponse.success("Booking paid successfully", paidBooking));
    } catch (error) {
        console.error("Error paying booking", error);
        return res.status(500).json(baseResponse.error("Internal server error"));
    }
}

exports.createBooking = async (req, res) => {
    const user_id = req.user.id; // Assuming user ID is available in req.user
    const { parking_slot_id, start_time, end_time } = req.body;

    if (!parking_slot_id || !start_time || !end_time) {
        return res.status(400).json(baseResponse.error("All fields are required"));
    }

    try {
        const parkingSlot = await parkingSlotRepo.getParkingSlotById(parking_slot_id);
        if (!parkingSlot) {
            return res.status(404).json(baseResponse.error("Parking slot not found"));
        }

        const overlappingBookings = await bookingRepo.getOverlappingBookings(parking_slot_id, start_time, end_time);
        if (overlappingBookings.length > 0) {
            return res.status(400).json(baseResponse.error("Parking slot is already booked for the selected time"));
        }

        const newBooking = await bookingRepo.createBooking(user_id, parking_slot_id, start_time, end_time);
        return res.status(201).json(baseResponse.success("Booking created successfully", newBooking));
    } catch (error) {
        console.error("Error creating booking", error);
        return res.status(500).json(baseResponse.error("Internal server error"));
    }
}

exports.getUserBookings = async (req, res) => {
    const userId = req.user.id; // Assuming user ID is available in req.user

    try {
        const bookings = await bookingRepo.getBookingByUserId(userId);
        return res.status(200).json(baseResponse.success("User bookings fetched successfully", bookings));
    } catch (error) {
        console.error("Error fetching user bookings", error);
        return res.status(500).json(baseResponse.error("Internal server error"));
    }
}

