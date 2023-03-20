import { html } from '../../node_modules/lit-html/lit-html.js'
import * as offerService from '../services/offerService.js'

const offerCard = (offer) => html`
<!-- Display a div with information about every post (if any)-->
<div class="offer">
    <img src=${offer.imageUrl} alt="example1" />
    <p>
        <strong>Title: </strong><span class="title">${offer.title}</span>
    </p>
    <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
    <a class="details-btn" href="/details/${offer._id}">Details</a>
</div>
`;

const dashboardTemplate = (offers) => html`
<section id="dashboard">
    <h2>Job Offers</h2>

    ${offers.length !== 0
     ? offers.map((offer) => offerCard(offer))
     : html `<h2>No offers yet.</h2>`}
    
</section>
`;

export const dashboardView = (ctx) => {
    offerService.getAll()
    .then((offers) => {
        ctx.render(dashboardTemplate(offers))
    })
}