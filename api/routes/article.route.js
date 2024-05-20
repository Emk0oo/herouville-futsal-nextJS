const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article.controller');

// Create a new article
router.post('/', articleController.createArticle);

// Get all articles
router.get('/', articleController.getArticles);

// Get a single article by ID
router.get('/:id', articleController.getArticleById);

// Update an article by ID
router.put('/:id', articleController.updateArticle);

// Delete an article by ID
router.delete('/:id', articleController.deleteArticle);

module.exports = router;
