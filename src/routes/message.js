const express = require('express');
const messageController = require('../controllers/messageController');
const { verifyToken, creatorVerifyToken } = require('../middleware/verifyToken');
const upload = require('../middleware/upload');

const router = express.Router();

router.get('/users', verifyToken, messageController.getUsersForChat);
router.get('/:id', verifyToken, messageController.getMessages);
router.post('/send/:id', verifyToken, upload.single('voice'), messageController.sendMessage);

module.exports = router