import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import * as albumService from '../services/albumService.js'

const editTemplate = (submitHandler,album) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form @submit=${submitHandler} class="edit-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${album.singer} />
            <input type="text" name="album" id="album-album" placeholder="Album" .value=${album.album} />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${album.imageUrl} />
            <input type="text" name="release" id="album-release" placeholder="Release date" .value=${album.release} />
            <input type="text" name="label" id="album-label" placeholder="Label" .value=${album.label} />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${album.sales} />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export const editView = (ctx) => {
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

        albumService.editAlbum(ctx.params.albumId,data)
        .then(() => {
            ctx.page.redirect(`/details/${ctx.params.albumId}`)
        })
    }

    albumService.getOneAlbum(ctx.params.albumId)
    .then((album) => {
        ctx.render(editTemplate(submitHandler,album))
    })
}