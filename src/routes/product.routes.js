const {
  getAllProducts,
  addProduct,
} = require("../controllers/product.controller");

const productRouter = require("express").Router();

productRouter.get("/", getAllProducts);
productRouter.post("/add", addProduct);

module.exports = productRouter;
