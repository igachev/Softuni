import {html,nothing} from '../../node_modules/lit-html/lit-html.js'
import * as shoeService from '../services/shoeService.js'

const detailsTemplate = (shoe,user) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src=${shoe.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
            <p>
                Model: <span id="details-model">${shoe.model}</span>
            </p>
            <p>Release date: <span id="details-release">${shoe.release}</span></p>
            <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
            <p>Value: <span id="details-value">${shoe.value}</span></p>
        </div>

        <!--Edit and Delete are only for creator-->
        ${user._id === shoe._ownerId
        ? html `<div id="action-buttons">
            <a href="/details/edit/${shoe._id}" id="edit-btn">Edit</a>
            <a href="/details/delete/${shoe._id}" id="delete-btn">Delete</a>
        </div>`
        : nothing}
    </div>
</section>
`;

export const detailsView = (ctx) => {
    shoeService.getOne(ctx.params.shoeId)
    .then((shoe) => {
        ctx.render(detailsTemplate(shoe,ctx.user))
    })
}