
// const Sequelize = require("sequelize");
// require("dotenv").config();

// const sequelize = new Sequelize( 
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     dialect: process.env.DB_DIALECT,
//     host: process.env.DB_HOST
//   }
// );

// module.exports = sequelize;


const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,  // Ensure the correct port is used
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Use this if required
    },
  },
  logging: false, // Disable logging for cleaner output
});

sequelize.authenticate()
  .then(() => console.log("Database connected successfully!"))
  .catch(err => console.error("Database connection failed:", err));

module.exports = sequelize;

