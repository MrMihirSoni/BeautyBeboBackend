const ProductModel = require("../models/product.model");

const getAllProducts = async (req, res) => {
  let { limit } = req.query;
  const query = req.query;
  
  if (limit && !isNaN(limit)) {
    limit = parseInt(limit);
  } else {
    limit = 0; // Default value if limit is not provided or not a valid number
  }
  
  try {
    let data;
    if (limit > 0) {
      data = await ProductModel.find(query).limit(limit);
    } else {
      data = await ProductModel.find(query);
    }

    if (!data) throw new Error("Something went wrong while fetching data!");
    res.status(200).json({ data });
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
