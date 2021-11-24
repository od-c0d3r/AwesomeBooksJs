function getBooksFromLocalStorage() {
  const books = JSON.parse(localStorage.getItem('books'));
  return books == null ? [] : books;
}

const books = getBooksFromLocalStorage();

function setBooksToLocalStorage() {
  localStorage.setItem('books', JSON.stringify(books));
  return books;
}

function displayBooks() {
  const container = document.getElementById('container');
  container.innerHTML = '';

  if (books.length === 0) {
    container.innerHTML = 'Shelf is empty 🙄❗';
  } else {
    books.forEach((book, index, books) => {
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

function removeBook(id) {
  books.splice(id, 1);
  setBooksToLocalStorage();
  displayBooks();
  return books;
}

function createBook(title, author) {
  const book = {};
  book.id = books.length;
  book.title = title;
  book.author = author;
  book.remove = removeBook;
  books.push(book);

  setBooksToLocalStorage();
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
