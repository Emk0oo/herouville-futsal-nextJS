const connection = require('../config/database');

// Create a new article
exports.createArticle = (req, res) => {
  const { title, content } = req.body;
  const query = 'INSERT INTO articles (title, content) VALUES (?, ?)';
  connection.query(query, [title, content], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId, title, content });
  });
};

// Get all articles
exports.getArticles = (req, res) => {
  const query = 'SELECT * FROM articles';
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};

// Get a single article by ID
exports.getArticleById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM articles WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.status(200).json(results[0]);
  });
};

// Update an article by ID
exports.updateArticle = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const query = 'UPDATE articles SET title = ?, content = ? WHERE id = ?';
  connection.query(query, [title, content, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.status(200).json({ id, title, content });
  });
};

// Delete an article by ID
exports.deleteArticle = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM articles WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.status(204).send();
  });
};
