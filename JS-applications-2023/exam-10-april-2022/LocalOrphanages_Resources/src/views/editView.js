import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import * as orphanageService from '../services/orphanageService.js'

const editTemplate = (post, submitHandler) => html`
<section id="edit-page" class="auth">
    <form @submit=${submitHandler} id="edit">
        <h1 class="title">Edit Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title" .value=${post.title}>
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description" .value=${post.description}>
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl" .value=${post.imageUrl}>
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address" .value=${post.address}>
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone" .value=${post.phone}>
        </article>

        <input type="submit" class="btn submit" value="Edit Post">
    </form>
</section>
`;

export const editView = (ctx) => {
const submitHandler = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

        const title = formData.get('title').trim()
        const description = formData.get('description').trim()
        const imageUrl = formData.get('imageUrl').trim()
        const address = formData.get('address').trim()
        const phone = formData.get('phone').trim()

        if(title === '' || description === '' ||
        imageUrl === '' || address === '' ||
        phone === '') {
            alert('All fields are required!')
            return;
        }

        const data = {
            title,
            description,
            imageUrl,
            address,
            phone
        }

        orphanageService.editPost(ctx.params.postId,data)
        .then(() => {
            ctx.page.redirect(`/details/${ctx.params.postId}`)
        })
}

orphanageService.getOnePost(ctx.params.postId)
.then((post) => {
    ctx.render(editTemplate(post,submitHandler))
})
}