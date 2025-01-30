const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sequelize = require('./src/config/db')
const logApiDetails = require('./src/middleware/log');
require("dotenv").config();
const port = process.env.PORT
console.log(port)
const authRoutes = require('./src/routes/auth');
const profileRoutes = require('./src/routes/profile');
const messageRoutes = require('./src/routes/message');

const { app, server } = require('./src/config/socket');

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(logApiDetails);

app.get('/', (req, res)=>{
  res.send('Hello From Vinedo Backend');
})

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/message', messageRoutes);

sequelize
  //.sync({ alter: true })
  .sync({ force: true })
  .then(() => {
    server.listen(port, ()=> {
        console.log(`server running at http://localhost:${port}`);
    })
 })
.catch((err) => {
  console.error(err);
});