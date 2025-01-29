const express = require('express');
const profileController = require('../controllers/profileController');
const { verifyToken, creatorVerifyToken } = require('../middleware/verifyToken');
const upload = require('../middleware/upload');

const router = express.Router();

router.put('/set-up', verifyToken, upload.single('profilepic'), profileController.profileSetUp);
router.put('/toggle-isAdult', verifyToken, profileController.toggleIsAdult);
router.put('/update-links', verifyToken, profileController.updateLinks);

module.exports = router