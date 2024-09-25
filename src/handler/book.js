class BookHandler {
  constructor(BookService) {
    this.BookService = BookService;

    this.getBook = this.getBook.bind(this);
  }

  async getBook(req, res) {
    const serviceRes = await this.BookService.getBook();
    // console.log(serviceRes);
    res.status(serviceRes.statusCode).send({
      books: serviceRes.books,
    });
  }
}

module.exports = BookHandler;
