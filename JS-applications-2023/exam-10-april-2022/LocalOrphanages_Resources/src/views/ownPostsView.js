import { html,nothing } from '../../node_modules/lit-html/lit-html.js'
import * as orphanageService from '../services/orphanageService.js'

const postCard = (post) => html`
<div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src=${post.imageUrl} alt="Material Image">
    <div class="btn-wrapper">
        <a href="/details/${post._id}" class="details-btn btn">Details</a>
    </div>
`;

const postTemplate = (posts) => html `
<section id="my-posts-page">
            <h1 class="title">My Posts</h1>

            <div class="my-posts">
            ${posts.map((post) => postCard(post))}
            </div>

            ${posts.length === 0
            ? html `<h1 class="title no-posts-title">You have no posts yet!</h1>`
            : nothing}
</section>
`;

export const ownPostsView = (ctx) => {
    orphanageService.getOwnPosts(ctx.user._id)
    .then((posts) => {
        ctx.render(postTemplate(posts))
    })
}