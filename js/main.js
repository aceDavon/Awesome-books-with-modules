import CreateBook from './create-book.js';
import { DynamicBook, status } from './dynamic-book.js';
import Time from './time.js';
import { singlePageNav, toggleActiveLink } from './spa-navigation.js';

class BooksCollection {
  constructor() {
    this.library = JSON.parse(localStorage.getItem('books')) || [];
  }

  // Model
  addBook(book) {
    this.library.push(book);
    this.saveCollection();
    DynamicBook.renderBooks(this.library, this);
  }

  removeBook(bookId) {
    this.library = this.library.filter(({ id }) => id !== bookId);
    this.saveCollection();
  }

  onDelete(bookToDelete) {
    this.removeBook(bookToDelete);
    DynamicBook.renderBooks(this.library, this);
    this.isCollectionEmpty();
  }

  getInput() {
    const id = this.library.length + 1;

    const bookTitle = document.getElementById('title');
    const { value: title } = bookTitle;

    const bookAuthor = document.getElementById('author');
    const { value: author } = bookAuthor;

    const newBook = new CreateBook(id, title, author);
    this.addBook(newBook);
    DynamicBook.renderBooks(this.library, this);

    bookTitle.value = '';
    bookAuthor.value = '';
  }

  isCollectionEmpty() {
    if (this.library.length === 0) {
      DynamicBook.renderEmptyMessage();
    }
  }

  saveCollection() {
    localStorage.setItem('books', JSON.stringify(this.library));
  }
}

/* Initialization */
const bookCollection = new BooksCollection();
bookCollection.isCollectionEmpty();
const { messageOn } = status;

if (!messageOn) DynamicBook.renderBooks(bookCollection.library, bookCollection);
const addBtn = document.querySelector('.add-btn');
addBtn.onclick = () => bookCollection.getInput();

setInterval(Time.displayTime, 10);
singlePageNav();
toggleActiveLink();
