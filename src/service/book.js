const { addDays } = require("date-fns");
class BookService {
  constructor(BookRepository, MemberRepository) {
    this.BookRepository = BookRepository;
    this.MemberRepository = MemberRepository;
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

  async getBookById(id) {
    try {
      const bookById = await this.BookRepository.findBookById(id);
      if (!bookById) {
        return {
          books: null,
          message: "Book not found",
          statusCode: 404,
        };
      } else {
        return {
          books: bookById,
          message: "Get book by id success",
          statusCode: 200,
        };
      }
    } catch (error) {
      return {
        books: null,
        message: error.message,
        statusCode: 500,
      };
    }
  }

  async borrowBook(memberId, bookId) {
    try {
      const book = await this.BookRepository.findBookById(bookId);
      const member = await this.MemberRepository.findMemberById(memberId);

      if (!book || !member) {
        return {
          books: null,
          message: "Book or Member not found",
          statusCode: 404,
        };
      }

      if (book.stock == 0) {
        return {
          books: null,
          message: "Book is already borrowed",
          statusCode: 400,
        };
      }

      if (member.book >= 2) {
        return {
          books: null,
          message: "Member can not borrow more than 2 books",
          statusCode: 400,
        };
      }

      const borrow_date = new Date();
      const due_date = addDays(borrow_date, 7);

      book.borrow_date = borrow_date;
      book.due_date = due_date;
      book.borrowed_by = memberId;
      book.stock--;
      member.book++;
      await this.BookRepository.save(book);
      await this.MemberRepository.save(member);

      return {
        books: null,
        message: "Book borrowed successfully",
        statusCode: 200,
      };
    } catch (error) {
      return {
        books: null,
        message: error.message,
        statusCode: 500,
      };
    }
  }

  async returnBook(memberId, bookId) {
    try {
      const book = await this.BookRepository.findBookById(bookId);
      const member = await this.MemberRepository.findMemberById(memberId);

      if (!book || !member) {
        return {
          books: null,
          message: "Book or Member not found",
          statusCode: 404,
        };
      }

      if (member && book && book.stock == 1) {
        return {
          books: null,
          message: "Book is already returned",
          statusCode: 400,
        };
      }

      if (book.borrowed_by !== memberId) {
        return {
          books: null,
          message: "You cannot return a book borrowed by another member",
          statusCode: 400,
        };
      }

      book.borrow_date = null;
      book.due_date = null;
      book.borrowed_by = null;
      book.stock++;
      member.book--;
      await this.BookRepository.save(book);
      await this.MemberRepository.save(member);

      return {
        books: null,
        message: "Book returned successfully",
        statusCode: 200,
      };
    } catch (error) {
      return {
        books: null,
        message: error.message,
        statusCode: 500,
      };
    }
  }
}

module.exports = BookService;
