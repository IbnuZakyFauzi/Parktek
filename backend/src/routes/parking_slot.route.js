const parkingSlotController = require('../controllers/parking_slot.controller');
const authMiddleware = require('../middlewares/auth');
const express = require('express');
const router = express.Router();

router.post('/add', authMiddleware.authenticateJWT, parkingSlotController.addParkingSlot);
router.get('/all', authMiddleware.authenticateJWT, parkingSlotController.getAllParkingSlots);
router.put('/update/:id', authMiddleware.authenticateJWT, parkingSlotController.updateParkingSlot);
router.delete('/delete/:id', authMiddleware.authenticateJWT, parkingSlotController.deleteParkingSlot);
router.get('/available', parkingSlotController.countAvailableParkingSlots);
router.get('/:id', parkingSlotController.getParkingSlotById);
router.get('/location/:location', parkingSlotController.getParkingSlotsByLocation);
router.get('/type/:type', parkingSlotController.getParkingSlotsByType);

module.exports = router;