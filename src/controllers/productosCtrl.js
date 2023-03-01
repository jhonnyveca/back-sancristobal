const conexion = require('../../config/connection');

//TODO : Listar productos
const getProducts = async (req, res) => {
  conexion.query('SELECT * FROM productos', (error, products) => {
    if (error) {
      throw error;
    } else {
      res.send(products);
    }
  });
};
//TODO: obtener un producto
const getproducto = async (req, res) => {
  conexion.query(
    'SELECT * FROM productos WHERE product_id=?',
    [req.params.id],
    (error, product) => {
      if (error) {
        throw error;
      } else {
        res.send(product);
      }
    }
  );
};
//TODO : Crear Usuario
const createProduct = async (req, res) => {
  try {
    let data = {
      product_id: req.body.product_id,
      product_name: req.body.product_name,
      product_price: req.body.product_price,
      product_stock: req.body.product_stock,
    };
    let sql = 'INSERT INTO productos SET ?';
    conexion.query(sql, data);
    res.status(200).json({ msg: 'Producto creado.' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
//TODO: Actualizar producto
const updateProduct = async (req, res) => {
  try {
    let sql =
      'UPDATE productos SET product_name=?, product_price=?, product_stock=? WHERE product_id=?';
    conexion.query(sql, [
      req.body.product_name,
      req.body.product_price,
      req.body.product_stock,
      req.params.id,
    ]);
    res.status(200).json({ msg: 'Producto actualizado.' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
//TODO: Eliminar producto
const deleteUser = async (req, res) => {
  try {
    conexion.query('DELETE FROM productos WHERE product_id = ?', [
      req.params.id,
    ]);
    res.status(200).json({ msg: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getProducts,
  getproducto,
  createProduct,
  updateProduct,
  deleteUser,
};
