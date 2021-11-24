/* eslint-disable import/extensions */

import Book from './book.js';

export default class BookShelf {
  constructor() {
    this.books = this.getBooksFromLocalStorage();
    this.displayBooks();
  }

  getBooksFromLocalStorage() {
    this.books = JSON.parse(localStorage.getItem('books'));
    return this.books == null ? [] : this.books;
  }

  setBooksToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
    return true;
  }

  displayBooks() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    if (this.books.length === 0) {
      container.innerHTML = 'Shelf is empty 🙄❗';
    } else {
      this.books.forEach((book, index, books) => {
        const title = document.createElement('p');
        const author = document.createElement('p');
        const removeBtn = document.createElement('button');
        removeBtn.setAttribute('data-id', books.indexOf(book));
        removeBtn.innerText = 'Remove';
        title.innerHTML = book.title;
        author.innerHTML = book.author;
        container.append(title, author, removeBtn);
      });
    }
  }

  addBook(title, author) {
    const book = new Book(title, author);
    book.id = this.books.length;
    this.books.push(book);
    this.setBooksToLocalStorage();
    this.displayBooks();
    return this.books;
  }

  removeBook(id) {
    this.books.splice(id, 1);
    this.setBooksToLocalStorage();
    this.displayBooks();
    return this.books;
  }
}
