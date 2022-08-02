//let bookCollection = [];
let messageOn = false;
class BooksCollection {
  constructor() {
    return [];
  }

  static isCollectionEmpty() {
    if (this.length === 0) {
      this.renderEmptyMessage();
    }
  }

  static saveCollection(collection) {
    localStorage.setItem('books', JSON.stringify(collection));
  }

  static loadBook(book, collection) {
    bookCollection.push(book);
    this.saveCollection(collection);
  }
}

let bookCollection = new BooksCollection();

// Creates a Book
class CreateBook {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

class DynamicBook {
  static renderEmptyMessage() {
    messageOn = true;
    const bookList = this.resetBookDisplay();
    const bookInfoContainer = bookList.querySelector('.book-info-container');
    bookInfoContainer.classList.add('p-4');

    const message = document.createElement('span');
    message.innerText =
      'Your book collection is empty. Kindly add your favorite books.';
    message.className = 'empty-message';

    const smileyFace = document.createElement('span');
    smileyFace.innerText = '😄';

    bookInfoContainer.append(message, smileyFace);
    bookList.appendChild(bookInfoContainer);
    return bookCollection;
  }

  static resetBookDisplay() {
    const bookDisplay = document.querySelector('.books-display');
    bookDisplay.innerHTML = '';

    const sectionTitle = document.createElement('h2');
    sectionTitle.innerText = 'All awesome books';
    sectionTitle.className = 'text-slate-50 text-center';

    const bookInfoContainer = document.createElement('div');
    bookInfoContainer.className = 'book-info-container';
    bookDisplay.append(sectionTitle, bookInfoContainer);

    return bookDisplay;
  }

  static isCollectionEmpty() {
    if (bookCollection.length === 0) this.renderEmptyMessage();
  }
}

// Model
class BookAction {
  static addBook() {
    const bookTitle = document.getElementById('title');
    const { value: title } = bookTitle;
    console.log(bookCollection);
    const id = bookCollection.length + 1;

    const bookAuthor = document.getElementById('author');
    const { value: author } = bookAuthor;

    const newBook = new CreateBook(id, title, author);
    BooksCollection.loadBook(newBook, bookCollection);
    this.renderBooks(bookCollection);

    bookTitle.value = '';
    bookAuthor.value = '';
  }

  static removeBook(bookId) {
    bookCollection = bookCollection.filter(({ id }) => id !== bookId);
    BooksCollection.saveCollection(bookCollection);
  }

  static renderBooks(collection) {
    const bookList = DynamicBook.resetBookDisplay();
    const bookInfoContainer = bookList.querySelector('.book-info-container');
    collection.forEach((book) => {
      const { id, title, author } = book;

      const bookTitle = document.createElement('span');
      bookTitle.innerText = title;
      bookTitle.className = 'book-title';

      const bookAuthor = document.createElement('span');
      bookAuthor.innerText = ` by ${author}`;
      bookAuthor.className = 'book-author';

      const bookInfo = document.createElement('h3');
      bookInfo.className = 'book-info ml-2';
      bookInfo.append(bookTitle, bookAuthor);

      const removeBtn = document.createElement('button');
      removeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg> 
      remove`;
      removeBtn.setAttribute('data-mdb-ripple', 'true');
      removeBtn.setAttribute('data-mdb-ripple-color', 'light');
      removeBtn.classList =
        'primary-btn del-btn flex flex-row px-2 pt-1 mr-2 pb-0.5 inline-block rounded text-red-500 leading-normal capitalize border border-red-300 shadow-md hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/50 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out w-fit h-fit';
      removeBtn.onclick = () => BookAction.onDelete(id);
      removeBtn.addEventListener('mouseover', () => {
        bookInfo.classList.add('line-through');
      });
      removeBtn.addEventListener('mouseleave', () => {
        bookInfo.classList.remove('line-through');
      });

      const bookContainer = document.createElement('div');
      bookContainer.className = 'book-container';
      bookContainer.append(bookInfo, removeBtn);

      bookInfoContainer.appendChild(bookContainer);
      bookList.appendChild(bookInfoContainer);
    });
  }

  static onDelete(bookToDelete) {
    this.removeBook(bookToDelete);
    this.renderBooks(bookCollection);
    DynamicBook.isCollectionEmpty();
  }
}

const savedCollection = JSON.parse(localStorage.getItem('books'));
bookCollection = savedCollection ?? DynamicBook.renderEmptyMessage();
DynamicBook.isCollectionEmpty();
console.log(savedCollection, bookCollection, messageOn);
console.log(bookCollection);
if (!messageOn) BookAction.renderBooks(bookCollection);

// Saves Collection
// function saveCollection() {
//   localStorage.setItem('books', JSON.stringify(bookCollection));
// }

// Load Book to Collection and Persist to localStorage.
// function loadBook(book) {
//   console.log(bookCollection);
//   bookCollection.push(book);
//   BooksCollection.saveCollection(bookCollection);
// }

// Deletes a Book
// function removeBook(bookId) {
//   bookCollection = bookCollection.filter(({ id }) => id !== bookId);
//   BooksCollection.saveCollection(bookCollection);
// }

// View
// function resetBookDisplay() {
//   const bookDisplay = document.querySelector('.books-display');
//   bookDisplay.innerHTML = '';

//   const sectionTitle = document.createElement('h2');
//   sectionTitle.innerText = 'All awesome books';
//   sectionTitle.className = 'text-slate-50 text-center';

//   const bookInfoContainer = document.createElement('div');
//   bookInfoContainer.className = 'book-info-container';
//   bookDisplay.append(sectionTitle, bookInfoContainer);

//   return bookDisplay;
// }

const addBtn = document.querySelector('.add-btn');
addBtn.onclick = () => BookAction.addBook();
// Controller
// function addBook() {
//   const bookTitle = document.getElementById('title');
//   const { value: title } = bookTitle;
//   console.log(bookCollection)
//   const id = bookCollection.length + 1;

//   const bookAuthor = document.getElementById('author');
//   const { value: author } = bookAuthor;

//   const newBook = new CreateBook(id, title, author);
//   BooksCollection.loadBook(newBook,bookCollection);
//   renderBooks(bookCollection);

//   bookTitle.value = '';
//   bookAuthor.value = '';
// }

// function onDelete(bookToDelete) {
//   return () => {
//     removeBook(bookToDelete);
//     renderBooks(bookCollection);
//     DynamicBook.isCollectionEmpty();
//     //isCollectionEmpty(); //class
//   };
// }

// function renderBooks(collection) {
//   const bookList = resetBookDisplay();
//   const bookInfoContainer = bookList.querySelector('.book-info-container');
//   collection.forEach((book) => {
//     const { id, title, author } = book;

//     const bookTitle = document.createElement('span');
//     bookTitle.innerText = title;
//     bookTitle.className = 'book-title';

//     const bookAuthor = document.createElement('span');
//     bookAuthor.innerText = ` by ${author}`;
//     bookAuthor.className = 'book-author';

//     const bookInfo = document.createElement('h3');
//     bookInfo.className = 'book-info ml-2';
//     bookInfo.append(bookTitle, bookAuthor);

//     const removeBtn = document.createElement('button');
//     removeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//     <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//     </svg>
//     remove`;
//     removeBtn.setAttribute('data-mdb-ripple', 'true');
//     removeBtn.setAttribute('data-mdb-ripple-color', 'light');
//     removeBtn.classList =
//       'primary-btn del-btn flex flex-row px-2 pt-1 mr-2 pb-0.5 inline-block rounded text-red-500 leading-normal capitalize border border-red-300 shadow-md hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/50 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out w-fit h-fit';
//     removeBtn.onclick = () => BookAction.onDelete(id);
//     removeBtn.addEventListener('mouseover', () => {
//       bookInfo.classList.add('line-through');
//     });
//     removeBtn.addEventListener('mouseleave', () => {
//       bookInfo.classList.remove('line-through');
//     });

//     const bookContainer = document.createElement('div');
//     bookContainer.className = 'book-container';
//     bookContainer.append(bookInfo, removeBtn);

//     bookInfoContainer.appendChild(bookContainer);
//     bookList.appendChild(bookInfoContainer);
//   });
// }
