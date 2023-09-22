const pageContainer = document.querySelector('.page-container');
const sidebarContainer = document.querySelector('.sidebar-container');
const booksContainer = document.querySelector('.books-container');
const newBookButton = document.querySelector('#new-book-button');
const addBookButton = document.querySelector('#add-book-button');
const cancelNewBookButton = document.querySelector('#cancel-new-book-button');
const newBookDialog = document.querySelector('#new-book-dialog');
const newBookForm = document.querySelector('#new-book-form');

newBookButton.addEventListener('click', openNewBookDialog);
newBookForm.addEventListener('submit', addBook);
cancelNewBookButton.addEventListener('click', closeNewBookDialog);

const books = [];

const bookOne = {
    title: "Pandora's Star",
    author: "Peter F Hamilton",
    pageCount: 935,
    genre: "Sci-fi",
    isRead: "Yes",
};


const bookTwo = {
    title: "Nine Princes in Amber",
    author: "Roger Zelazny",
    pageCount: 357,
    genre: "Fantasy",
    isRead: "Yes",
};


const bookThree = {
    title: "Stormlight Archive",
    author: "Brandon Sanderson",
    pageCount: 999,
    genre: "Fantasy",
    isRead: "No",
};


const bookFour = {
    title: "Imajica",
    author: "Clive Barker",
    pageCount: 900,
    genre: "Fantasy",
    isRead: "Yes",
};


const bookFive = {
    title: "Behave",
    author: "Robert Sapolsky",
    pageCount: 878,
    genre: "Science",
    isRead: "No",
};


function Book(index, title, author, pageCount, genre, isRead) {
    this.index = index;
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.genre = genre;
    this.isRead = isRead;
};


function openNewBookDialog(clickEvent) {
    console.log(`Function openNewBookDialog received event: ${clickEvent}`);
    newBookDialog.showModal();
    newBookForm.reset();
};


function closeNewBookDialog() {
    newBookDialog.close();
    newBookForm.reset();
};


function addBook(submitEvent) {
    submitEvent.preventDefault();
    let index = books.length;
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('book-author').value;
    let pageCount = document.getElementById('book-page-count').value;
    let genre = document.getElementById('book-genre').value;
    let isRead = 'No';

    console.log(`Checkbox value before: ${isRead}`);
    console.log(`Checkbox.checked value: ${document.getElementById('book-read').checked}`);

    if (document.getElementById('book-read').checked === true) {
        isRead = 'Yes';
    };

    console.log(`Checkbox value after: ${isRead}`);

    let newBook = new Book(index, title, author, pageCount, genre, isRead);
    books.push(newBook);
    addBookCard(newBook);
    
    closeNewBookDialog();
};


function populateBookCards() {
    books.forEach(addBookCard);
};


function addBookCard(book) {
    console.log('Function addBookCard executing...');
    console.log(`  - Received parameter: ${book}`);
    let bookCard = document.createElement('div');
    console.log(`  - Created bookCard: ${bookCard}`);
    bookCard.classList.add('book-card');
    console.log('  - Added book-card class to bookCard');

    let bookTitle = document.createElement('div');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = book.title;

    let bookDetails = document.createElement('ul');
    bookDetails.classList.add('book-details');

    let bookIndex = document.createElement('li');
    bookIndex.textContent = `Index: ${book.index}`;
    
    let bookAuthor = document.createElement('li');
    bookAuthor.textContent = `by ${book.author}`;

    let bookPageCount = document.createElement('li');
    bookPageCount.textContent = `${book.pageCount} pages`;

    let bookGenre = document.createElement('li');
    bookGenre.textContent = `Genre: ${book.genre}`;

    let bookIsRead = document.createElement('li');
    bookIsRead.textContent = `Read? ${book.isRead}`;

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookDetails);
    bookDetails.appendChild(bookIndex);
    bookDetails.appendChild(bookAuthor);
    bookDetails.appendChild(bookPageCount);
    bookDetails.appendChild(bookGenre);
    bookDetails.appendChild(bookIsRead);

    booksContainer.appendChild(bookCard);
};