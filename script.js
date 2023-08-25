const books = [];

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

function addBook(title, author, pageCount, genre, isRead) {
    let newBook = new Book(title, author, pageCount, genre, isRead);
    
};