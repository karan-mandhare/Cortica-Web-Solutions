import { Router } from "express";
import {
  addProductData,
  getAllProducts,
  removeProduct,
  buyProduct,       
  updateStock,      
} from "../controller/productInfoController.js";

const routes = Router();

routes.post("/add", addProductData);

routes.get("/get", getAllProducts);

routes.delete("/delete/:_id", removeProduct);

routes.post("/buy", buyProduct);

routes.post("/update-stock", updateStock);

export default routes;
