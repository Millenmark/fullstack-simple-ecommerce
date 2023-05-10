import productModel from "../models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json(products);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the products" });
  }
};

