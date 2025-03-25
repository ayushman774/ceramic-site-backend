const express = require('express');
const products = require('../controller/productsController')

const route = express();

route.get('/popular-products', products.getPopularProducts);
route.get('/trending-products', products.getTrendingProducts);
route.get('/all-products', products.getAllProducts);

module.exports = route