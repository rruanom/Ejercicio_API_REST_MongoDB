const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controllers');
const { validateCreateProducts, validateDeleteProduct, validateGetProducts, validateUpdateProduct } = require("../validators/products.validators");

router.get('/',validateGetProducts, productController.getProducts);
router.post('/',validateCreateProducts, productController.createProductController);
router.put('/',validateUpdateProduct, productController.updateProductController);
router.delete('/',validateDeleteProduct, productController.deleteProductController);

module.exports = router;

// GET http://localhost:3000/api/products --> ALL
// PUT http://localhost:3000/api/products?title=manzana
// POST http://localhost:3000/api/products
// ejemplo para POST:
// {
//     "title": "gamba",
//     "price": "19",
//     "description": "gamba rica",
//     "image": "gamba.jpg",
//     "provider": "Dia"
// }