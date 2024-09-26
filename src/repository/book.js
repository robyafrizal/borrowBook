const { Book } = require("../../models");

class BookRepository {
  constructor() {}

  async findBook() {
    const BookList = await Book.findAll();

    return BookList;
  }

  async findBookById(id) {
    const idBook = await Book.findOne({ where: { id } });
    return idBook;
  }

  async save(book) {
    return await book.save();
  }
}

module.exports = BookRepository;
