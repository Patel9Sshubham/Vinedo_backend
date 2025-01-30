const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM("user", "creator"),
    allowNull: false,
    defaultValue: "user",
  },
  name: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    defaultValue: null,
  },
  profilePic: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null,
  },
  links: {
    type: DataTypes.TEXT, // ✅ Store JSON as TEXT
    allowNull: true,
    defaultValue: null,
    get() {
      const rawValue = this.getDataValue("links");
      return rawValue ? JSON.parse(rawValue) : null;
    },
    set(value) {
      this.setDataValue("links", JSON.stringify(value));
    },
  },
  isAdult: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User;
