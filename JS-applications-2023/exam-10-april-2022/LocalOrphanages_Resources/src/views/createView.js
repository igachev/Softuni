import { html,nothing } from '../../node_modules/lit-html/lit-html.js'
import * as orphanageService from '../services/orphanageService.js'

const createTemplate = (submitHandler) => html`
<section id="create-page" class="auth">
    <form @submit=${submitHandler} id="create">
        <h1 class="title">Create Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title">
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description">
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl">
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address">
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone">
        </article>

        <input type="submit" class="btn submit" value="Create Post">
    </form>
</section>
`;

export const createView = (ctx) => {
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

        orphanageService.createPost(data)
        .then(() => {
            ctx.page.redirect('/dashboard')
        })
    }

    ctx.render(createTemplate(submitHandler))
}