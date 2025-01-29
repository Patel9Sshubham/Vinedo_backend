const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');

const Message = sequelize.define('Message', {
    senderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    receiverId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: true, 
        defaultValue: null
    },
    voiceNote: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    }
}, {
    timestamps: true,
});

module.exports = Message;
