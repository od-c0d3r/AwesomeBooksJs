/* eslint-disable import/extensions */

import BookShelf from './modules/bookShelf.js';

const app = new BookShelf();

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  const title = document.getElementById('titleInput').value;
  const author = document.getElementById('authorInput').value;
  app.addBook(title, author);
  form.reset();
  e.preventDefault();
});

document.addEventListener('click', (e) => {
  if (e.target.innerText === 'Remove') {
    const id = e.target.getAttribute('data-id');
    app.removeBook(id);
    e.preventDefault();
  }
});
