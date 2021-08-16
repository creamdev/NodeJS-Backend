const express = require('express');
const router = express.Router();
const authController=require('../controllers/auth');

router.post('/login',authController.loginUser);
router.post('/register', authController.register);
router.get("/confirmation/:token", authController.confirmToken);
router.post("/resend", authController.resendConfirmationToken);
router.post("/forgot-password", authController.forgotPassword);
router.get("/reset-password/:token", authController.getUserToken);
router.post("/reset-password/:token", authController.resetPassword);

module.exports = router