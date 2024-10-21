import { Product } from "../model/productModel.js";

const addProductData = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    if (!name || !price) {
      return res.status(400).json({
        success: false,
        message: "Error while adding data",
      });
    }

    const result = await Product.create({
      name,
      price,
      quantity,
    });
    if (result) {
      return res.status(200).json({
        success: true,
        message: "Data added successfully",
        result,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while adding data",
      error,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const result = await Product.find({});
    if (result) {
      return res.status(200).json({
        success: true,
        message: "Data fetched successfully",
        result,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while getting data",
      error,
    });
  }
};

const removeProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Product.findByIdAndUpdate(
      { _id: _id },
      { $set: { enable: false } }
    );
    if (result) {
      return res.status(200).json({
        success: true,
        message: "Product removed successfully",
        result,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while deleting data",
      error,
    });
  }
};


const buyProduct = async (req, res) => {
  try {
    const { _id, quantity } = req.body; 

    if (!_id || !quantity) {
      return res.status(400).json({
        success: false,
        message: "Product ID and quantity are required",
      });
    }

    const product = await Product.findById(_id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (product.quantity < quantity) {
      return res.status(400).json({
        success: false,
        message: "Not enough stock available",
      });
    }

    product.quantity -= quantity;
    const updatedProduct = await product.save();

    return res.status(200).json({
      success: true,
      message: "Product bought successfully",
      updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while buying product",
      error,
    });
  }
};

const updateStock = async (req, res) => {
  try {
    const { _id, quantity } = req.body; 

    if (!_id || !quantity) {
      return res.status(400).json({
        success: false,
        message: "Product ID and quantity are required",
      });
    }

    const product = await Product.findById(_id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    product.quantity += quantity;
    const updatedProduct = await product.save();

    return res.status(200).json({
      success: true,
      message: "Stock updated successfully",
      updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while updating stock",
      error,
    });
  }
};

export { addProductData, getAllProducts, removeProduct, buyProduct, updateStock };
