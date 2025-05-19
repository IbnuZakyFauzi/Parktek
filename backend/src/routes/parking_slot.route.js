const parkingSlotController = require('../controllers/parking_slot.controller');
const authMiddleware = require('../middlewares/auth');
const express = require('express');
const router = express.Router();

router.post('/add', authMiddleware.authenticateJWT, parkingSlotController.addParkingSlot);
<<<<<<< HEAD
=======
router.get('/', parkingSlotController.getAllParkingSlots); // Root path to get all slots for frontend
>>>>>>> ed0b973 (added frontend, already integrated, many error)
router.get('/all', authMiddleware.authenticateJWT, parkingSlotController.getAllParkingSlots);
router.put('/update/:id', authMiddleware.authenticateJWT, parkingSlotController.updateParkingSlot);
router.delete('/delete/:id', authMiddleware.authenticateJWT, parkingSlotController.deleteParkingSlot);
router.get('/available', parkingSlotController.countAvailableParkingSlots);
router.post('/available-by-location', parkingSlotController.getAvailableParkingSlotsByLocation);
router.get('/location/:location', parkingSlotController.getParkingSlotsByLocation);
router.get('/type/:type', parkingSlotController.getParkingSlotsByType);
// Put the specific routes before the dynamic route with :id
router.get('/:id', parkingSlotController.getParkingSlotById);

module.exports = router;