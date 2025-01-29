const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');

const Post = sequelize.define('Post', {
   
}, {
    timestamps: true,
});

module.exports = Post;
