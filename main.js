/* eslint-disable no-restricted-syntax */

localStorage.books = JSON.stringify([]);

function displayBooks() {
  const container = document.getElementById('container');
  container.innerHTML = '';

  const books = JSON.parse(localStorage.books);
  if (books.length === 0) {
    container.innerHTML = 'Shelf is empty 🙄❗';
  } else {
    for (const book of books) {
      const title = document.createElement('p');
      const author = document.createElement('p');
      const removeBtn = document.createElement('button');
      removeBtn.setAttribute('data-id', books.indexOf(book));
      removeBtn.innerText = 'Remove';
      title.innerHTML = book.title;
      author.innerHTML = book.author;
      container.append(title, author, removeBtn);
    }
  }
}

function removeBook(id) {
  const books = JSON.parse(localStorage.books);
  books.splice(id, 1);
  localStorage.books = JSON.stringify(books);
  displayBooks();
  return books;
}

function createBook(title, author) {
  const books = JSON.parse(localStorage.books);
  const book = {};
  book.id = books.length;
  book.title = title;
  book.author = author;
  book.remove = removeBook;

  books.push(book);
  localStorage.books = JSON.stringify(books);
  displayBooks();
  return books;
}

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  const title = document.getElementById('titleInput').value;
  const author = document.getElementById('authorInput').value;
  createBook(title, author);

  // To clear the form fields after submission
  form.reset();
  e.preventDefault();
});

document.addEventListener('click', (e) => {
  if (e.target.innerText === 'Remove') {
    const id = e.target.getAttribute('data-id');
    removeBook(id);
    e.preventDefault();
  }
});

displayBooks();
