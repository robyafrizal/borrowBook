class BookService {
  constructor(BookRepository) {
    this.BookRepository = BookRepository;
  }

  async getBook() {
    try {
      const bookList = await this.BookRepository.findBook();

      return {
        statusCode: 200,
        books: bookList,
      };
    } catch (err) {
      return {
        statusCode: 500,
        books: null,
      };
    }
  }
}

module.exports = BookService;
