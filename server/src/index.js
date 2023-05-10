import dotenv from "dotenv";
import connectToDatabase from "./database.js";
import express from "express";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectToDatabase();
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
