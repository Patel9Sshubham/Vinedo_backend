const express = require('express');
const authController = require('../controllers/authController');
const { verifyToken, creatorVerifyToken } = require('../middleware/verifyToken');

const router = express.Router();

router.post('/sign-up', authController.signUp);
router.post('/sign-in', authController.login);


module.exports = router