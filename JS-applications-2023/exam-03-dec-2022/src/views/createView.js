import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import * as albumService from '../services/albumService.js'

const createTemplate = (submitHandler) => html`
<section id="create">
    <div class="form">
        <h2>Add Album</h2>
        <form @submit=${submitHandler} class="create-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export const createView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const singer = formData.get('singer')
        const album = formData.get('album')
        const imageUrl = formData.get('imageUrl')
        const release = formData.get('release')
        const label = formData.get('label')
        const sales = formData.get('sales')

        if(singer === '' || album === '' || imageUrl === '' ||
        release === '' || label === '' || sales === '') {
            alert('All fields are required')
            return;
        }

        const data = {
            singer,
            album, 
            imageUrl, 
            release, 
            label, 
            sales
        }

        albumService.createAlbum(data)
        .then(() => {
            ctx.page.redirect('/dashboard')
        })
    }

    ctx.render(createTemplate(submitHandler))
}