import { Router } from "express";
import { getProducts, getProduct } from "../controllers/productControllers.js";

const productRoutes = Router();

productRoutes.get("/", getProducts);
productRoutes.get("/:id", getProduct);

export default productRoutes;
