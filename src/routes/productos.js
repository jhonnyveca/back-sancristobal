const express = require('express');
const {
  getProducts,
  getproducto,
  createProduct,
  updateProduct,
  deleteUser,
} = require('../controllers/productosCtrl');

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getproducto);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteUser);

module.exports = router;
