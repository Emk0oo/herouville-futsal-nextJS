const connection = require('../config/database');

// Create a new article
exports.createArticle = (req, res) => {
    const { date, imageURL, title, title2, title3, entete, content, content2, author } = req.body;
    const query = `
        INSERT INTO articles (date, imageURL, title, title2, title3, entete, content, content2, author) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    connection.query(query, [date, imageURL, title, title2, title3, entete, content, content2, author], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, date, imageURL, title, title2, title3, entete, content, content2, author });
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
    const { date, imageURL, title, title2, title3, entete, content, content2, author } = req.body;
    const query = `
        UPDATE articles 
        SET date = ?, imageURL = ?, title = ?, title2 = ?, title3 = ?, entete = ?, content = ?, content2 = ?, author = ?
        WHERE id = ?
    `;
    connection.query(query, [date, imageURL, title, title2, title3, entete, content, content2, author, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.status(200).json({ id, date, imageURL, title, title2, title3, entete, content, content2, author });
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