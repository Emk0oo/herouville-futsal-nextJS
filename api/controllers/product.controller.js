const connection = require('../config/database');

exports.createProduct = (req, res) => {
  const { name, description, price, stock } = req.body;
  const query = 'INSERT INTO produits (name, description, price, stock) VALUES (?, ?, ?, ?)';
  connection.query(query, [name, description, price, stock], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId, name, description, price, stock });
  });
};

exports.getProducts = (req, res) => {
  const query = 'SELECT * FROM produits';
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};

exports.getProductById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM produits WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(results[0]);
  });
};

exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock } = req.body;
  const query = 'UPDATE produits SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?';
  connection.query(query, [name, description, price, stock, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product updated successfully' });
  });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM produits WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  });
};
