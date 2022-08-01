const addBtn = document.querySelector('.add-btn');
addBtn.onclick = addBook;

let bookCollection = [];
let messageOn = false;

// Helper functions
function renderEmptyMessage() {
  messageOn = true;
  const bookList = document.querySelector('.books-display');
  bookList.innerHTML='';
  const message = document.createElement('span');
  message.innerText = 'Your book collection is empty. Kindly add your favorite books.';

  bookList.appendChild(message);
  return bookCollection;
}

function isCollectionEmpty() {
  if (bookCollection.length === 0) renderEmptyMessage();
}

// Model
const savedCollection = JSON.parse(localStorage.getItem('books'));

bookCollection = savedCollection ?? renderEmptyMessage();
isCollectionEmpty();

if (!messageOn) renderBooks(bookCollection);

// Saves Collection
function saveCollection() {
  localStorage.setItem('books', JSON.stringify(bookCollection));
}

// Creates a Book
function createBook(id, title, author) {
  this.id = id;
  this.title = title;
  this.author = author;
  bookCollection.push(this);
  saveCollection();
}

// Deletes a Book
function removeBook(bookId) {
  bookCollection = bookCollection.filter(({ id }) => id !== bookId);
  saveCollection();
}

// View
function renderBooks(collection) {
  const bookList = document.querySelector('.books-display');
  bookList.innerHTML = '';
  collection.forEach((book) => {
    const { id, title, author } = book;

    const bookTitle = document.createElement('h3');
    bookTitle.innerText = title;
    bookTitle.className = 'book-title';

    const bookAuthor = document.createElement('h3');
    bookAuthor.innerText = author;
    bookAuthor.className = 'book-author';

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.classList = 'primary-btn del-btn';
    removeBtn.onclick = onDelete(id);

    const bookContainer = document.createElement('div');
    bookContainer.className = 'book-container';

    bookContainer.append(bookTitle, bookAuthor, removeBtn);

    bookList.appendChild(bookContainer);
  });
}

// Controller
function addBook() {
  const bookTitle = document.getElementById('title');
  const { value: title } = bookTitle;
  const id = bookCollection.length + 1;

  const bookAuthor = document.getElementById('author');
  const { value: author } = bookAuthor;

  new createBook(id, title, author);
  renderBooks(bookCollection);
  bookTitle.value = '';
  bookAuthor.value = '';
}

function onDelete(bookToDelete) {
  return () => {
    removeBook(bookToDelete);
    renderBooks(bookCollection);
    isCollectionEmpty();
  };
}