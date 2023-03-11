import { html, render } from '../node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/collections/books'
const loadBtn = document.getElementById('loadBooks')

// ---- get ------------------------
async function getBooks() {
    const res = await fetch(url)
    const books = res.json()
    return books;
}

const books = Object.values(await getBooks())

function bookCard(book) {
    return html`
    <tr data-id="${book._id}">
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button @click="${(e) => displayEditForm(e)}">Edit</button>
            <button @click="${(e) => deleteBook(book._id)}">Delete</button>
        </td>
    </tr>
` ;
}

function allBooks(books) {
    return html`
    ${books.map(bookCard)}
`
}

function loadBooks() {
    let tbody = document.querySelector('tbody')
    render(allBooks(books), tbody)
}


loadBtn.addEventListener('click', loadBooks)
// -----------------------------------

//---- post -----

async function createBook(author, title) {
    const res = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ author, title })
    })
    const newBook = await res.json()
    books.push(newBook)
    loadBooks()
}


function addBook(e) {
    e.preventDefault()
    const formData = new FormData(addForm)
    const author = formData.get('author')
    const title = formData.get('title')
    if (author !== '' && title !== '') {
        createBook(author, title)
    }
}

const addForm = document.getElementById('add-form')
addForm.addEventListener('submit', addBook)
// ----------------------

// ---- delete --------
async function deleteBook(id) {
    const res = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'delete'
    })

    const selectedBook = await res.json();
    const findBook = books.find((book) => book._id === selectedBook._id)
    const bookIndex = books.indexOf(findBook);
    books.splice(bookIndex, 1)
    loadBooks()
}
// ---------------------

// ----- put ------

function htmlEditForm() {
    return html`
<form id="edit-form">
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Save">
</form>
`
}

function displayEditForm(e) {
    let id = e.target.parentElement.parentElement.dataset.id;
    let editFormTemplate = htmlEditForm();
  
    let editFormElement = document.createElement('div');
    render(editFormTemplate, editFormElement);
  
    document.body.appendChild(editFormElement);

    let submitButton = editFormElement.querySelector('input[type="submit"]');
    submitButton.addEventListener('click', (e) => {
      e.preventDefault()
      const formData = new FormData(editFormElement.querySelector('#edit-form'));
      const title = formData.get('title')
      const author = formData.get('author')
      updateBook(author, title, id)
      editFormElement.remove()
    })
  }


async function updateBook(author, title, id) {
    const res = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ author, title, _id: id })
    })
    const selectedBook = await res.json();
    const findBook = books.find((book) => book._id === selectedBook._id)
    const bookIndex = books.indexOf(findBook);
    books.splice(bookIndex, 1, selectedBook)

    loadBooks()
}

// --------
