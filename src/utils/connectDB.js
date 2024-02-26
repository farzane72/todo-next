import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connections[0].readyState) return;
  mongoose.set("strictQuery", false);
  //console.log(process.env.MONGO_URI);
  await mongoose.connect("mongodb+srv://farzane2012:12345@cluster0.oyv3mnc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  //await mongoose.connect(MONGO_URI);
  console.log("Connected to DB");
}

export default connectDB;
