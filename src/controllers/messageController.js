const User = require('../models/user');
const Message = require('../models/message');
const { uploadToS3 } = require('../services/s3');
const { Op } = require('sequelize');
const {getReceiverSocketId, io} = require('../config/socket');

const getUsersForChat = async (req, res) => {
    try {
        const loggedInUserId = req.user.id;

        const filteredUsers = await User.findAll({
            where: {
                id: { [Op.ne]: loggedInUserId } 
            },
            attributes: { exclude: ['password'] }
        });

        res.status(200).json({message:"Users fetched successfully", users:filteredUsers});
    } catch (error) {
        console.error("Error in getUsersForSidebar:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get messages between two users
const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params; 
        const myId = req.user.id; 

        const messages = await Message.findAll({
            where: {
                [Op.or]: [
                    { senderId: myId, receiverId: userToChatId },
                    { senderId: userToChatId, receiverId: myId }
                ]
            },
            order: [['createdAt', 'ASC']]
        });

        res.status(200).json({message:"Messages fetched successfully", messages:messages});
    } catch (error) {
        console.error("Error in getMessages controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Send a new message
const sendMessage = async (req, res) => {
    try {
        const { text } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user.id;

        let voiceUrl = null;

        if (req.file) {
            voiceUrl = await uploadToS3(req.file);
        }
        const newMessage = await Message.create({
            senderId,
            receiverId,
            text: text || null,
            voiceNote: voiceUrl 
        });

        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
          io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json({message:"Message sent successfully", sentMessage:newMessage});
    } catch (error) {
        console.error("Error in sendMessage controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports= { getUsersForChat, getMessages, sendMessage }