function init() {

let loadBtn = document.getElementById('loadBooks')
let titleInput = document.getElementsByTagName('input')[0]
let authorInput = document.getElementsByTagName('input')[1]
let submitBtn = document.querySelector('form button')
let table = document.querySelector('table tbody')

loadBtn.addEventListener('click',getBooks)
submitBtn.addEventListener('click',addBook)



//-------------- get functionality----------------
async function getBooks() {
    const res = await fetch('http://localhost:3030/jsonstore/collections/books')
    const data = await res.json()
    const books = Object.values(data)
    displayBooks(books)
}

function bookCard(book) {
let tr = document.createElement('tr')
let td1 = document.createElement('td')
td1.textContent = book.title

let td2 = document.createElement('td')
td2.textContent = book.author

let td3 = document.createElement('td')
let editBtn = document.createElement('button')
editBtn.textContent = 'Edit'
editBtn.addEventListener('click',onUpdate)

let deleteBtn = document.createElement('button')
deleteBtn.textContent = 'Delete'
deleteBtn.addEventListener('click',onDelete)

td3.appendChild(editBtn)
td3.appendChild(deleteBtn)

tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)

tr.id = book._id
return tr;
}

function displayBooks(books) {
    table.replaceChildren(...books.map(bookCard))
}
//----------------------------

//------------ post functionality -------------

async function postBook(author,title) {
const body = { author , title }
const res = await fetch('http://localhost:3030/jsonstore/collections/books', {
    method:'post',
    headers: {
        'Content-Type':'application/json'
    },
    body:JSON.stringify(body)
})
const data = await res.json()
return data;
}

async function addBook(e) {
    e.preventDefault()
    if(titleInput.value !== '' && authorInput.value !== '') {
        await postBook(authorInput.value,titleInput.value)
        getBooks()
    }
}

//----------------------------------

//---------- delete functionality ----------

async function deleteBook(id) {
    const res = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`,{
        method:'delete'
    })
    document.getElementById(id).remove()
    const data = await res.json()
    return data;
}

function onDelete(e) {
let elementId = e.target.parentElement.parentElement.id;
deleteBook(elementId)
}

// -------------- put functionality --------------
async function putBook(id,author,title) {
    let body = {author,title,_id:id}
    const res = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`,{
        method:'put',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    })
    return res.json()
    }
    
     function onUpdate(e) {
    
    let elementId = e.target.parentElement.parentElement.id;
    submitBtn.textContent = 'Save'
    let titleData = e.target.parentElement.parentElement.children[0].textContent;
    let authorData = e.target.parentElement.parentElement.children[1].textContent;
    authorInput.value = authorData;
    titleInput.value = titleData;
    document.getElementsByTagName('h3')[0].textContent = 'Edit FORM'
        submitBtn.removeEventListener('click',addBook)
        submitBtn.addEventListener('click',s)
       

       async function s(e) {
        e.preventDefault()
        let authorData = authorInput.value;
        let titleData = titleInput.value;
    
        await putBook(elementId,authorData,titleData)
        document.getElementsByTagName('h3')[0].textContent = 'FORM'
        authorInput.value = '';
        titleInput.value = '';
        submitBtn.textContent = 'Submit'
        await getBooks()
        submitBtn.removeEventListener('click',s)
        submitBtn.addEventListener('click',addBook)
       }
    }
    
}

init()