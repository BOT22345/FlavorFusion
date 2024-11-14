import mongoose from "mongoose";
export const connectDB=async ()=>{
    await mongoose.connect("mongodb+srv://nmongia48:Sunderlal1@cluster0.nxx9z.mongodb.net/FlavourFusion").then(()=>(console.log("db connects")));
}