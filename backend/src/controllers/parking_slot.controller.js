const parkingSlotRepo = require('../repositories/parking_slot.repo');
const bookingRepo = require('../repositories/booking.repo');
const baseResponse = require('../utils/baseResponse.util');

exports.getAllParkingSlots = async (req, res) => {
    try {
        const parkingSlots = await parkingSlotRepo.getAllParkingSlots();
        return res.status(200).json(baseResponse.success("Parking slots fetched successfully", parkingSlots));
    } catch (error) {
        console.error("Error fetching parking slots", error);
        return res.status(500).json(baseResponse.error("Internal server error"));
    }
}

exports.addParkingSlot = async (req, res) => {
    const { location, type, is_active } = req.body;

    if (!location || !type || is_active === undefined) {
        return res.status(400).json(baseResponse.error("All fields are required"));
    }

    try {
        const newParkingSlot = await parkingSlotRepo.addParkingSlot({ location, type, is_active });
        return res.status(201).json(baseResponse.success("Parking slot added successfully", newParkingSlot));
    } catch (error) {
        console.error("Error adding parking slot", error);
        return res.status(500).json(baseResponse.error("Internal server error"));
    }
}

exports.updateParkingSlot = async (req, res) => {
    const { id } = req.params;
    const { location, type, is_active } = req.body;

    if (!location || !type || is_active === undefined) {
        return res.status(400).json(baseResponse.error("All fields are required"));
    }

    try {
        const parkingSlot = await parkingSlotRepo.getParkingSlotById(id);
        if (!parkingSlot) {
            return res.status(404).json(baseResponse.error("Parking slot not found"));
        }

        const updatedParkingSlot = await parkingSlotRepo.updateParkingSlot(id, { location, type, is_active });
        return res.status(200).json(baseResponse.success("Parking slot updated successfully", updatedParkingSlot));
    } catch (error) {
        console.error("Error updating parking slot", error);
        return res.status(500).json(baseResponse.error("Internal server error"));
    }
}

exports.deleteParkingSlot = async (req, res) => {
    const { id } = req.params;

    try {
        const parkingSlot = await parkingSlotRepo.getParkingSlotById(id);
        if (!parkingSlot) {
            return res.status(404).json(baseResponse.error("Parking slot not found"));
        }

        await parkingSlotRepo.deleteParkingSlot(id);
        return res.status(200).json(baseResponse.success("Parking slot deleted successfully"));
    } catch (error) {
        console.error("Error deleting parking slot", error);
        return res.status(500).json(baseResponse.error("Internal server error"));
    }
}

exports.countAvailableParkingSlots = async (req, res) => {
    try {
        const count = await parkingSlotRepo.countAvailableParkingSlots();
        return res.status(200).json(baseResponse.success("Available parking slots count fetched successfully", { count }));
    } catch (error) {
        console.error("Error counting available parking slots", error);
        return res.status(500).json(baseResponse.error("Internal server error"));
    }
}

exports.getParkingSlotById = async (req, res) => {
    const { id } = req.params;

    try {
        const parkingSlot = await parkingSlotRepo.getParkingSlotById(id);
        if (!parkingSlot) {
            return res.status(404).json(baseResponse.error("Parking slot not found"));
        }
        return res.status(200).json(baseResponse.success("Parking slot fetched successfully", parkingSlot));
    } catch (error) {
        console.error("Error fetching parking slot", error);
        return res.status(500).json(baseResponse.error("Internal server error"));
    }
}

exports.getAvailableParkingSlots = async (req, res) => {
    const { start_time, end_time } = req.query;

    if (!start_time || !end_time) {
        return res.status(400).json(baseResponse.error("Start time and end time are required"));
    }

    try {
        const overlappingBookings = await bookingRepo.getOverlappingBookings(start_time, end_time);
        const bookedSlotIds = overlappingBookings.map(booking => booking.parking_slot_id);

        const availableParkingSlots = await parkingSlotRepo.getAllParkingSlots();
        const filteredSlots = availableParkingSlots.filter(slot => !bookedSlotIds.includes(slot.id));

        return res.status(200).json(baseResponse.success("Available parking slots fetched successfully", filteredSlots));
    } catch (error) {
        console.error("Error fetching available parking slots", error);
        return res.status(500).json(baseResponse.error("Internal server error"));
    }
}

exports.checkParkingSlotAvailability = async (req, res) => {
    const { id } = req.params;
    const { start_time, end_time } = req.query;

    if (!start_time || !end_time) {
        return res.status(400).json(baseResponse.error("Start time and end time are required"));
    }

    try {
        const overlappingBookings = await bookingRepo.getOverlappingBookings(id, start_time, end_time);
        if (overlappingBookings.length > 0) {
            return res.status(200).json(baseResponse.success("Parking slot is not available", { available: false }));
        }
        return res.status(200).json(baseResponse.success("Parking slot is available", { available: true }));
    } catch (error) {
        console.error("Error checking parking slot availability", error);
        return res.status(500).json(baseResponse.error("Internal server error"));
    }
}