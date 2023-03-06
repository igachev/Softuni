import {html , render} from '../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const catSection = document.getElementById('allCats')

let displayCats = (allCats) => html `
<ul>${allCats.map(catCard)}</ul>
`

let catCard = (cat) => html `
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
        <button class="showBtn" @click="${(e) =>
        e.target.nextElementSibling.style.display === 'none' 
        ? (e.target.nextElementSibling.style.display = 'block',
        e.target.textContent = 'Hide status code')

        : (e.target.nextElementSibling.style.display = 'none',
        e.target.textContent = 'Show status code')}"
        >Show status code</button>
        <div class="status" style="display: none" id="${cat.id}">
        <h4>Status Code: ${cat.statusCode}</h4>
        <p>${cat.statusMessage}</p>
        </div>
        </div>
        </li>
`;


render(displayCats(cats),catSection)