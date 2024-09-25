const express = require("express");

const BookHandler = require("../handler/book");
const BookService = require("../service/book");
const BookRepository = require("../repository/book");

const bookRepository = new BookRepository();
const bookService = new BookService(bookRepository);
const bookHandler = new BookHandler(bookService);

const router = express.Router();

router.get("/books", bookHandler.getBook);

module.exports = router;
