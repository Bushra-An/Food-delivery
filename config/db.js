import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/FoodDelivery");
 export const conn = mongoose.connection;
conn.once('open',()=>{
       console.log('sucessfull')
})