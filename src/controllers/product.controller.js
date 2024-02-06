const ProductModel = require("../models/product.model");

const getAllProducts = async (req, res) => {
  const query = req.query;
  try {
    const data = await ProductModel.find(query);
    if (!data) throw new Error("Somethin went wrong while fetching data!");
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addProduct = async (req, res) => {
  const { title, description, price, image, category } = req.body;
  try {
    if (!title || !description || !price || !image || !category)
      throw new Error("Please fill all details!");
    else {
      const newProduct = new ProductModel({
        title,
        description,
        price,
        image,
        category,
      });
      await newProduct.save();
      res.status(201).json({
        message: "new product has been added!",
        newProduct: newProduct,
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllProducts, addProduct };
