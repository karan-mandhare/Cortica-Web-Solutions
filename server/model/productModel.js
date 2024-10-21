import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    default: 10,
  },
  enable:{
    type:Boolean,
    default:true,
  }
});


const Product = mongoose.model("Product", productSchema, "productdata");

export { Product };
