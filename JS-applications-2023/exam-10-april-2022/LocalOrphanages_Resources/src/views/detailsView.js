import { html,nothing } from '../../node_modules/lit-html/lit-html.js'
import * as orphanageService from '../services/orphanageService.js'
import * as donationService from '../services/donationService.js'

const detailsTemplate = (post,user) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src=${post.imageUrl} alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${post.title}</h2>
                <p class="post-description">Description: ${post.description}</p>
                <p class="post-address">Address: ${post.address}</p>
                <p class="post-number">Phone number: ${post.phone}</p>
                <p class="donate-Item">Donate Materials: ${postDonations(post._id)}</p>

                <!--Edit and Delete are only for creator-->
                <div class="btns">
                   ${post._ownerId === user?._id
                    ? html ` <a href="/details/edit/${post._id}" class="edit-btn btn">Edit</a>
                    <a href="/details/delete/${post._id}" class="delete-btn btn">Delete</a>`
                    : nothing}

                    <!--Bonus - Only for logged-in users ( not authors )-->
                    ${user?.accessToken && post._ownerId !== user?._id
                    ? html `<a href="/details/donate/${post._id}" class="donate-btn btn">Donate</a>`
                    : nothing}
                </div>

            </div>
        </div>
    </div>
</section>
`;

export const detailsView = (ctx) => {
    orphanageService.getOnePost(ctx.params.postId)
    .then((post) => {
        ctx.render(detailsTemplate(post,ctx.user))
    })
}

async function postDonations(postId) {
    let donations = await donationService.postTotalDonations(postId)
    document.querySelector('.donate-Item').textContent = 'Donate Materials: ' + donations
}