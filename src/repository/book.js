const { Book } = require("../../models");

class BookRepository {
  constructor() {}

  async findBook() {
    const BookList = await Book.findAll();

    return BookList;
  }
}

module.exports = BookRepository;
