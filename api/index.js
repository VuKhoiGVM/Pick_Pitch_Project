import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import roomsRoute from './routes/rooms.js'
import hotelsRoute from './routes/hotels.js'
import cookieParser from "cookie-parser"
import cors from 'cors'
dotenv.config("")
const app = express();
// connect to database
async function connect() {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to Mongoose");
  } catch (error) {
    throw error;
  }
}

mongoose.connection.on("disconnected",()=>{
    console.log("Disconnected to Mongoose")
})
//middlewares 

app.use(cors()) // Use this after the variable declaration
app.use(cookieParser()) // parse body in request
app.use(express.json()) // using format json
// dinh tuyen website]
app.use(cors({ origin: true, credentials: true }));

app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)
// xử lí lỗi
app.use(function (err, req, res, next) {

  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
})


app.listen(8800,function () {
    connect();
    console.log("Connected to backend");
  }
    );


