const db = require("../database/pg.database");


exports.getAllBookings = async () => {
    try {
        const result = await db.query("SELECT * FROM bookings");
        return result.rows;
    } catch (error) {
        console.error("Error fetching bookings", error);
        throw error;
    }
}

exports.addBooking = async (booking) => {
    const { user_id, parking_slot_id, start_time, end_time, status = 'pending' } = booking;
    try {
        const result = await db.query(
            "INSERT INTO bookings (user_id, parking_slot_id, start_time, end_time, status) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [user_id, parking_slot_id, start_time, end_time, status]
        );
        return result.rows[0];
    } catch (error) {
        console.error("Error adding booking", error);
        throw error;
    }
}

exports.createBooking = async (user_id, parking_slot_id, start_time, end_time) => {
    const status = 'pending';
    try {
        const result = await db.query(
            "INSERT INTO bookings (user_id, slot_id, start_time, end_time, status) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [user_id, parking_slot_id, start_time, end_time, status]
        );
        return result.rows[0];
    } catch (error) {
        console.error("Error creating booking", error);
        throw error;
    }
}

exports.updateBooking = async (id, booking) => {
    const { user_id, parking_slot_id, start_time, end_time, status } = booking;
    try {
        const result = await db.query(
            "UPDATE bookings SET user_id = $1, parking_slot_id = $2, start_time = $3, end_time = $4, status = $5 WHERE id = $6 RETURNING *",
            [user_id, parking_slot_id, start_time, end_time, status, id]
        );
        return result.rows[0];
    } catch (error) {
        console.error("Error updating booking", error);
        throw error;
    }
}

exports.deleteBooking = async (id) => {
    try {
        const result = await db.query("DELETE FROM bookings WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    } catch (error) {
        console.error("Error deleting booking", error);
        throw error;
    }
}

exports.getBookingById = async (id) => {
    try {
        const result = await db.query("SELECT * FROM bookings WHERE id = $1", [id]);
        return result.rows[0];
    } catch (error) {
        console.error("Error fetching booking by ID", error);
        throw error;
    }
}

exports.getBookingByUserId = async (user_id) => {
    try {
        const result = await db.query("SELECT * FROM bookings WHERE user_id = $1", [user_id]);
        return result.rows;
    } catch (error) {
        console.error("Error fetching booking by user ID", error);
        throw error;
    }
}

exports.cancelBooking = async (id) => {
    try {
        const result = await db.query("UPDATE bookings SET status = 'cancelled' WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    } catch (error) {
        console.error("Error cancelling booking", error);
        throw error;
    }
}

exports.payBooking = async (id) => {
    try {
        const result = await db.query(
            "UPDATE bookings SET paid_at = NOW(), is_paid = true, status = 'booked' WHERE id = $1 RETURNING *",
            [id]
        );
        return result.rows[0];
    } catch (error) {
        console.error("Error paying booking", error);
        throw error;
    }
}

exports.getOverlappingBookings = async (parking_slot_id, start_time, end_time) => {
    try {
        const result = await db.query(
            "SELECT * FROM bookings WHERE parking_slot_id = $1 AND ((start_time <= $2 AND end_time >= $2) OR (start_time <= $3 AND end_time >= $3))",
            [parking_slot_id, start_time, end_time]
        );
        return result.rows;
    } catch (error) {
        console.error("Error fetching overlapping bookings", error);
        throw error;
    }
}

exports.completeBooking = async (id) => {
    try {
        const result = await db.query("UPDATE bookings SET status = 'completed' WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    } catch (error) {
        console.error("Error completing booking", error);
        throw error;
    }
}