const express = require("express");

const BookHandler = require("../handler/book");
const BookService = require("../service/book");
const BookRepository = require("../repository/book");
const MemberRepository = require("../repository/member");

const memberRepository = new MemberRepository();
const bookRepository = new BookRepository();
const bookService = new BookService(bookRepository, memberRepository);
const bookHandler = new BookHandler(bookService);

const router = express.Router();

router.get("/books", bookHandler.getBook);
router.get("/books/:id", bookHandler.getBookById);
router.post("/borrow", bookHandler.borrowBook);
router.post("/return", bookHandler.returnBook);

module.exports = router;
