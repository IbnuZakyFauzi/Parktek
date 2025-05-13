const db = require("../database/pg.database");

exports.getAllParkingSlots = async () => {
    try {
        const result = await db.query("SELECT * FROM parking_slots");
        return result.rows;
    } catch (error) {
        console.error("Error fetching parking slots", error);
        throw error;
    }
}

exports.addParkingSlot = async (parkingSlot) => {
    const { location, type, is_active } = parkingSlot;
    try {
        const result = await db.query(
            "INSERT INTO parking_slots (location, type, is_active) VALUES ($1, $2, $3) RETURNING *",
            [location, type, is_active]
        );
        return result.rows[0];
    } catch (error) {
        console.error("Error adding parking slot", error);
        throw error;
    }
}

exports.updateParkingSlot = async (id, parkingSlot) => {
    const { location, type, is_active } = parkingSlot;
    try {
        const result = await db.query(
            "UPDATE parking_slots SET location = $1, type = $2, is_active = $3 WHERE id = $4 RETURNING *",
            [location, type, is_active, id]
        );
        return result.rows[0];
    } catch (error) {
        console.error("Error updating parking slot", error);
        throw error;
    }
}

exports.deleteParkingSlot = async (id) => {
    try {
        const result = await db.query("DELETE FROM parking_slots WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    } catch (error) {
        console.error("Error deleting parking slot", error);
        throw error;
    }
}

exports.countAvailableParkingSlots = async () => {
    try {
        const result = await db.query("SELECT COUNT(*) FROM parking_slots WHERE is_active = true");
        return parseInt(result.rows[0].count, 10);
    } catch (error) {
        console.error("Error counting available parking slots", error);
        throw error;
    }
}

exports.getParkingSlotById = async (id) => {
    try {
        const result = await db.query("SELECT * FROM parking_slots WHERE id = $1", [id]);
        return result.rows[0];
    } catch (error) {
        console.error("Error fetching parking slot by ID", error);
        throw error;
    }
}

exports.checkParkingSlotAvailability = async (id) => {
    try {
        const result = await db.query("SELECT is_active FROM parking_slots WHERE id = $1", [id]);
        return result.rows[0].is_active;
    } catch (error) {
        console.error("Error checking parking slot availability", error);
        throw error;
    }
}

exports.getParkingSlotsByType = async (type) => {
    try {
        const result = await db.query("SELECT * FROM parking_slots WHERE type = $1", [type]);
        return result.rows;
    } catch (error) {
        console.error("Error fetching parking slots by type", error);
        throw error;
    }
}

exports.getParkingSlotsByLocation = async (location) => {
    try {
        const result = await db.query("SELECT * FROM parking_slots WHERE location = $1", [location]);
        return result.rows;
    } catch (error) {
        console.error("Error fetching parking slots by location", error);
        throw error;
    }
}