import { Router } from "express";
import { getProducts } from "../controllers/productControllers.js";

const productRoutes = Router();

productRoutes.get("/", getProducts);

export default productRoutes