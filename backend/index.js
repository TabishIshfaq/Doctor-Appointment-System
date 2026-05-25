// import express from "express"
// import cookieParser from "cookie-parser"
// import cors from 'cors'
// import mongoose from "mongoose"
// import dotenv from 'dotenv'
// import authRoute from "./Routes/auth.js"
// import userRoute from "./Routes/user.js"
// import doctorRoute from "./Routes/doctor.js"
// import reviewRoute from "./Routes/review.js"
// import bookingRoute from "./Routes/booking.js"
// dotenv.config()

// const app = express()
// const port = process.env.PORT || 8000

// const corsOptions = {
//     origin:true
// }

// app.get('/', (req,res)=>{
//     res.send('Api is working')
// })
// //database connnection
// // Database connection
// mongoose.set("strictQuery", false);

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("Mongo database is connected");
//   } catch (err) {
//     console.log("Mongo database connection failed:", err.message);
//   }
// };

// // mongoose.set('strictQuery', false)
// // const connectDB= async()=>{
// //     try{
// //         await mongoose.connect(process.env.MONGO_URL,{
// //             useNewUrlParser: true,
// //             useUnifiedTopology: true,
// //         })
// //         console.log('Monogo database is connected')
// //     } catch (err) {
// //         console.log('Monogo database is connected failed')
// //     }
// // }
// // //middleware
// // app.use(express.json())
// // app.use(cookieParser())
// // app.use(cors(corsOptions))
// // app.use('/api/v1/auth', authRoute) //domain/api/v1/auth/register
// // app.use('/api/v1/users', userRoute)
// // app.use('/api/v1/doctors', doctorRoute)
// // app.use('/api/v1/reviews', reviewRoute)
// // app.use('/api/v1/bookings',bookingRoute)
// // app.listen(port,()=>{
// //     connectDB();
// //     console.log('Server is running on port'+ port)
// // })
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";
import bookingRoute from "./Routes/booking.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// CORS setup
const corsOptions = {
  origin: true,
};

// Test route
app.get("/", (req, res) => {
  res.send("API is working");
});

// --------------------------
// 📌 DATABASE CONNECTION
// --------------------------
mongoose.set("strictQuery", false);

const connectDB = async () => {
  console.log("Connecting to Mongo:", process.env.MONGO_URL);
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("❌ FULL MONGO ERROR ↓↓↓");
    console.log(err);
  }
};


// --------------------------
// 📌 MIDDLEWARE
// --------------------------
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// --------------------------
// 📌 ROUTES
// --------------------------
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/bookings", bookingRoute);

// --------------------------
// 📌 START SERVER
// --------------------------
app.listen(port, () => {
  connectDB();
  console.log("Server is running on port " + port);
});
