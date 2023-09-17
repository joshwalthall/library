const pageContainer = document.querySelector('.page-container');
const sidebarContainer = document.querySelector('.sidebar-container');
const booksContainer = document.querySelector('.books-container');
const newBookButton = document.querySelector('#new-book-button');
const newBookDialog = document.querySelector('#new-book-dialog');

newBookButton.addEventListener('click', function() {openNewBookDialog();});

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

function Book(title, author, pageCount, genre, isRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.genre = genre;
    this.isRead = isRead;
    // this.info = function() {
    //     let bookInfo = "";
    //     bookInfo += `${this.title} by ${this.author}, `;
    //     bookInfo += `${this.pageCount} pages, `;
    //     let bookReadText = '';
    //     if (this.isRead === true) {
    //         bookReadText = 'has been read';
    //     } else if (this.isRead === false) {
    //         bookReadText = 'hasn\'t been read';
    //     };
    //     bookInfo += bookReadText;
    //     return bookInfo;
};

function openNewBookDialog() {
    newBookDialog.showModal();
};

function addBook(title, author, pageCount, genre, isRead) {
    let newBook = new Book(title, author, pageCount, genre, isRead);
    books.push(newBook);
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
    bookDetails.appendChild(bookAuthor);
    bookDetails.appendChild(bookPageCount);
    bookDetails.appendChild(bookGenre);
    bookDetails.appendChild(bookIsRead);

    booksContainer.appendChild(bookCard);
};

books.push(bookOne, bookTwo, bookThree, bookFour, bookFive);
populateBookCards();