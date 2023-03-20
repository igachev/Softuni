import { html,nothing } from '../../node_modules/lit-html/lit-html.js'
import * as offerService from '../services/offerService.js'
import * as applicationService from '../services/applicationService.js'

const detailsTemplate = (offer,user) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${offer.imageUrl} alt="example1" />
        <p id="details-title">${offer.title}</p>
        <p id="details-category">
            Category: <span id="categories">${offer.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${offer.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${offer.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offer.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications"> ${updateTotalCount(offer._id)}</strong></p>

        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            ${user?._id === offer._ownerId
            ? html `<a href="/details/edit/${offer._id}" id="edit-btn">Edit</a>
            <a href="/details/delete/${offer._id}" id="delete-btn">Delete</a>`
            : nothing}

            <!--Bonus - Only for logged-in users ( not authors )-->
            ${user?.accessToken && user?._id !== offer._ownerId
            ? html `<a href="/details/applications/${offer._id}" id="apply-btn">Apply</a>`
            : nothing}
        </div>
    </div>
</section>
`;

export const detailsView = (ctx) => {
    offerService.getOne(ctx.params.offerId)
    .then((offer) => {
        ctx.render(detailsTemplate(offer,ctx.user))
    })
}

async function updateTotalCount(offerId) {
    const count = await applicationService.getTotal(offerId)
    document.getElementById('applications').textContent = count;
  }