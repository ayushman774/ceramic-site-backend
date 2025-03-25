const productList = require("../model/productData");

const getPopularProducts = (req, res) => {
  if (productList) {
    const result = productList.filter(
      (product) => product.section === "popular"
    );
    res.status(200).send(result);
  }
};

const getTrendingProducts = (req, res) => {
  if (productList) {
    const result = productList.filter(
      (product) => product.section === "trending"
    );
    res.status(200).send(result);
  }
};

const getAllProducts = (req, res) => {
  if (productList) {
    res.status(200).send(productList);
  }
};

const products = { getPopularProducts, getTrendingProducts, getAllProducts };

module.exports = products;
