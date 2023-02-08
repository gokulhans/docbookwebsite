const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products-controller");

router.get("/", productsController.getAllProducts);
router.get('/add', productsController.getProductAddform);
router.post("/add", productsController.addProduct);
router.get('/edit/:id', productsController.getProductEditform);
router.post("/edit", productsController.editProduct);
router.get('/:id', productsController.getProductById);
router.get("/delete/:id", productsController.deleteProduct);
router.get('/bookap/:id', productsController.getProductBookform);
router.post('/bookap', productsController.bookAppo);

module.exports = router;