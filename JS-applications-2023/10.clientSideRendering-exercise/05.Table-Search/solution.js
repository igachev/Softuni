import {html , render} from '../node_modules/lit-html/lit-html.js';

let url = 'http://localhost:3030/jsonstore/advanced/table'
let tbody = document.querySelector('tbody')
const userData = await getData()

async function getData() {
   const res = await fetch(url)
   const data = Object.values(await res.json())
   return data
}

const userCard = (user) => html `
         <tr>
         <td>${user.firstName} ${user.lastName}</td>
                <td>${user.email}</td>
                <td>${user.course}</td>
         </tr>
`

const displayUsers = (users) => html `
   ${users.map(userCard)}
`

render(displayUsers(userData),tbody)

document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   function onClick() {
      //   TODO:
      let textValue = document.getElementById('searchField').value.toLowerCase();
      let allTd = document.querySelectorAll('tbody td')
     
      allTd.forEach((td) => {
         td.parentElement.classList.remove('select')
      }) 
      
      allTd.forEach((td) => {
         if(td.textContent.toLowerCase().includes(textValue)) {
            td.parentElement.classList.add('select')
         }
      })
      document.getElementById('searchField').value = ''
   }
