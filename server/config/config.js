import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const res = await mongoose.connect("mongodb://localhost:27017/product");
    console.log("database connected");
  } catch (err) {
    console.log("Database connection error");
  }
};

export default connectDb;
