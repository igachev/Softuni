import {html,nothing} from '../../node_modules/lit-html/lit-html.js'
import * as shoeService from '../services/shoeService.js'

const shoeCard = (shoe) => html`
<li class="card">
    <img src=${shoe.imageUrl} alt="travis" />
    <p>
        <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
    </p>
    <p>
        <strong>Model: </strong><span class="model">${shoe.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
    <a class="details-btn" href="/details/${shoe._id}">Details</a>
</li>
`;

const dashboardTemplate = (shoes) => html `
<section id="dashboard">
          <h2>Collectibles</h2>
          <ul class="card-wrapper">
          ${shoes.map((shoe) => shoeCard(shoe))}
          </ul>
          ${shoes.length === 0
            ? html `<h2>There are no items added yet.</h2>`
            : nothing}
</section>
`;

export const dashBoardView = (ctx) => {
shoeService.getAll()
.then((shoes) => {
    ctx.render(dashboardTemplate(shoes))
})
}