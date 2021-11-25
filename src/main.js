/* eslint-disable import/extensions, no-undef */

import BookShelf from './modules/bookShelf.js';

const { DateTime } = luxon;
const time = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('time').innerHTML = time;

const listPage = document.getElementById('listPage');
const formPage = document.getElementById('formPage');
const contactPage = document.getElementById('contactPage');

const app = new BookShelf();
const form = document.getElementById('form');

function showListPage() {
  listPage.className = 'list-page';
  formPage.className = 'display-none';
  contactPage.className = 'display-none';
}

function showFormPage() {
  listPage.className = 'display-none';
  formPage.className = 'form-page';
  contactPage.className = 'display-none';
}

function showContactPage() {
  listPage.className = 'display-none';
  formPage.className = 'display-none';
  contactPage.className = 'contact-page';
}

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
  } else if (e.target.id === 'logo') {
    showListPage();
  } else if (e.target.id === 'listLink') {
    showListPage();
  } else if (e.target.id === 'formLink') {
    showFormPage();
  } else if (e.target.id === 'contactLink') {
    showContactPage();
  }
});
