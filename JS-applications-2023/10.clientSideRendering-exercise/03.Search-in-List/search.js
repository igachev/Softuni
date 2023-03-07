import {html , render} from '../node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

function search() {
   // TODO
const divTowns = document.getElementById('towns')
const result = document.getElementById('result')
let searchText = document.getElementById('searchText')
let searchBtn = document.querySelector('button')
let countMatches = 0;

const townCard = (town) => html `
   <li>${town}</li>
`;

const listOfTowns = (townData) => html `
   <ul>${townData.map(townCard)}</ul>
`;

render(listOfTowns(towns),divTowns)

searchBtn.addEventListener('click',(e) => {
   e.preventDefault()
   let inputValue = searchText.value;
   let allLi = document.querySelectorAll('li')
   allLi.forEach((li) => {
      if(li.textContent.includes(inputValue)) {
         li.classList.add('active')
         countMatches++
      }
   })
   result.textContent = `${countMatches} matches found`
})
}

search()

