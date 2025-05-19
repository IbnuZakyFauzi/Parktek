const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth');
const express = require('express');
const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
<<<<<<< HEAD
router.get('/logout', authMiddleware.authenticateJWT, userController.logoutUser);
router.get('/profile', authMiddleware.authenticateJWT, userController.getProfile);
=======
router.post('/logout', authMiddleware.authenticateJWT, userController.logoutUser); // Changed GET to POST
router.get('/me', authMiddleware.authenticateJWT, userController.getProfile); // Changed /profile to /me
>>>>>>> ed0b973 (added frontend, already integrated, many error)
router.get('/all', userController.getAllUsers);
router.delete('/delete/:id', userController.deleteUser);
router.get('/:id', authMiddleware.authenticateJWT, userController.getUserById);
router.put('/update/:id', authMiddleware.authenticateJWT, userController.updateUser);

module.exports = router;