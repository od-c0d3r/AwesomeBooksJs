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
    const container = document.getElementById('table');
    container.innerHTML = '';

    if (this.books.length === 0) {
      container.innerHTML = 'Shelf is empty 🙄❗';
    } else {
      this.books.forEach((book, index, books) => {
        const tableRow = document.createElement('tr');
        const rowData = document.createElement('td');
        const rowBtn = document.createElement('td');
        const removeBtn = document.createElement('button');
        rowData.innerText = `"${book.title}" by ${book.author}`;
        removeBtn.setAttribute('data-id', books.indexOf(book));
        removeBtn.innerText = 'Remove';
        rowBtn.innerHTML = removeBtn.outerHTML;
        tableRow.append(rowData, rowBtn)
        container.append(tableRow);
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
