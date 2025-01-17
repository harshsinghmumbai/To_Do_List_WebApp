import mongoose from "mongoose";

export default async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("Error on mongodb setup", error);
  }
}
