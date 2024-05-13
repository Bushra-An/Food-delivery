import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app configs
const app = express();
const port = 4000;

//middleware
app.use(express.json())
app.use(cors())

//db connection
mongoose.connect("mongodb://localhost:27017/FoodDelivery");
  const conn = mongoose.connection;
conn.once('open',()=>{
       console.log('DB Connected')
})


 //API end points

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
  res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server Started on http:\\localhost:${port}`)
})
//mongo db
