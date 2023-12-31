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

const bookSix = {
    title: "Really Really Long Book Title for Testing Purposes",
    author: "Testy McTesterson",
    pageCount: 700,
    genre: "Fiction",
    isRead: "No",
};


const testBooks = [bookOne, bookTwo, bookThree, bookFour, bookFive, bookSix];


function Book(title, author, pageCount, genre, isRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.genre = genre;
    this.isRead = isRead;
    this.toggleRead = function () {
        console.log(`Book Object isRead before toggleRead: ${this.isRead}`);
        if (this.isRead == 'Yes') {
            this.isRead = 'No';
        } else if (this.isRead == 'No') {
            this.isRead = 'Yes';
        };
        console.log(`Book Object isRead after toggleRead: ${this.isRead}`);
    };
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

    let newBook = new Book(title, author, pageCount, genre, isRead);
    books.push(newBook);
    addBookCard(newBook);
    
    closeNewBookDialog();
};


function removeBook() {
    bookIndex = Number(this.dataset.index);
    delete books[bookIndex];
    removeBookCards();
    populateBookCards();
};


function toggleBookRead() {
    let bookIndex = Number(this.dataset.index);
    let book = books[bookIndex];
    console.log(`Function toggleBookRead got book: ${book.title}`);
    book.toggleRead();

    let bookCard = booksContainer.querySelector(`[data-index='${this.dataset.index}']`);
    let bookIsRead = bookCard.querySelector('.is-read');
    bookIsRead.textContent = `Read? ${book.isRead}`;
};


function removeBookCards() {
    while (booksContainer.firstChild) {
        booksContainer.removeChild(booksContainer.lastChild);
    };
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

    let bookTitle = document.createElement('div');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = book.title;

    let bookDetails = document.createElement('div');
    bookDetails.classList.add('book-details');
    
    let bookAuthor = document.createElement('div');
    bookAuthor.textContent = `by ${book.author}`;

    let bookPageCount = document.createElement('div');
    bookPageCount.textContent = `${book.pageCount} pages`;

    let bookGenre = document.createElement('div');
    bookGenre.textContent = `Genre: ${book.genre}`;

    let bookIsRead = document.createElement('div');
    bookIsRead.classList.add('is-read');
    bookIsRead.textContent = `Read? ${book.isRead}`;
    
    bookIndex = books.indexOf(book);
    bookCard.dataset.index = `${bookIndex}`;

    let buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    let toggleReadButton = document.createElement('button');
    toggleReadButton.classList.add('toggle-read-button');
    toggleReadButton.dataset.index = `${bookIndex}`;
    toggleReadButton.addEventListener('click', toggleBookRead);

    let removeBookButton = document.createElement('button');
    removeBookButton.classList.add('remove-book-button');
    removeBookButton.dataset.index = `${bookIndex}`;
    removeBookButton.addEventListener('click', removeBook);

    bookCard.appendChild(bookTitle);
    bookDetails.appendChild(bookAuthor);
    bookDetails.appendChild(bookPageCount);
    bookDetails.appendChild(bookGenre);
    bookDetails.appendChild(bookIsRead);
    bookCard.appendChild(bookDetails);
    buttonsContainer.appendChild(toggleReadButton);
    buttonsContainer.appendChild(removeBookButton);
    bookCard.appendChild(buttonsContainer);
    
    booksContainer.appendChild(bookCard);
};


function createTestBookCard(book) {
    let newBook = new Book(
        book.title,
        book.author,
        book.pageCount,
        book.genre,
        book.isRead);
    books.push(newBook);
    addBookCard(newBook);
};


testBooks.forEach(createTestBookCard);