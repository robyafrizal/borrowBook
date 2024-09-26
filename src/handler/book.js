class BookHandler {
  constructor(BookService) {
    this.BookService = BookService;

    this.getBook = this.getBook.bind(this);
    this.getBookById = this.getBookById.bind(this);
    this.borrowBook = this.borrowBook.bind(this);
    this.returnBook = this.returnBook.bind(this);
  }

  async getBook(req, res) {
    const serviceRes = await this.BookService.getBook();
    // console.log(serviceRes);
    res.status(serviceRes.statusCode).send({
      books: serviceRes.books,
    });
  }

  async getBookById(req, res) {
    const id = req.params.id;
    const serviceRes = await this.BookService.getBookById(id);
    res.status(serviceRes.statusCode).send({
      books: serviceRes.books,
      message: serviceRes.message,
    });
  }

  async borrowBook(req, res) {
    const { memberId, bookId } = req.body;
    const serviceRes = await this.BookService.borrowBook(memberId, bookId);
    res.status(serviceRes.statusCode).send({
      books: serviceRes.books,
      message: serviceRes.message,
    });
  }

  async returnBook(req, res) {
    const { bookId } = req.body;
    const serviceRes = await this.BookService.returnBook(bookId);
    res.status(serviceRes.statusCode).send({
      books: serviceRes.books,
      message: serviceRes.message,
    });
  }
}

module.exports = BookHandler;
