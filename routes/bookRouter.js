const express = require('express');

// Importing functions from controller file
const { createBook, getBooks, getBook, updateBook, deleteBook } = require('../controllers/bookController');
const router = express.Router();
// All routes
router.get("/books", getBooks) // router to get all books
router.get("/books/:id", getBook) // router to get single book based on id
router.put("/books/:id", updateBook)// update book  based on id
router.delete("/books/:id", deleteBook)// delete book based on id
router.post("/books", createBook)// create new book

module.exports = router
