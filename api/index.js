import express, { application, response } from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB!")
      } catch (error) {
        throw error;
      }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("--MongoDB disonnected--")
});
mongoose.connection.on("connected", ()=>{
    console.log("--MongoDB connected--")
});


app.get("/", (req,res)=>{
    res.send("hello first request")
})

/******* MIDDLEWARE **********/
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
})

//App listen to port 8800
app.listen(8800, ()=>{
    connect();
    console.log("Connected to backend!");
})