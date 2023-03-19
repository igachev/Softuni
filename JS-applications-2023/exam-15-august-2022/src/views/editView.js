import {html} from '../../node_modules/lit-html/lit-html.js'
import * as shoeService from '../services/shoeService.js'

const editTemplate = (submitHandler,shoe) => html `
 <section id="edit">
          <div class="form">
            <h2>Edit item</h2>
            <form @submit=${submitHandler} class="edit-form">
              <input
                type="text"
                name="brand"
                id="shoe-brand"
                placeholder="Brand"
                .value=${shoe.brand}
              />
              <input
                type="text"
                name="model"
                id="shoe-model"
                placeholder="Model"
                .value=${shoe.model}
              />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                placeholder="Image url"
                .value=${shoe.imageUrl}
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                placeholder="Release date"
                .value=${shoe.release}
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                placeholder="Designer"
                .value=${shoe.designer}
              />
              <input
                type="text"
                name="value"
                id="shoe-value"
                placeholder="Value"
                .value=${shoe.value}
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>
`;

export const editView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const brand = formData.get('brand')
        const model = formData.get('model')
        const imageUrl = formData.get('imageUrl')
        const release = formData.get('release')
        const designer = formData.get('designer')
        const value = formData.get('value')

        if(brand === '' || model === '' || imageUrl === '' ||
        release === '' || designer === '' || value === '') {
            alert('All fields are required!')
            return;
        }

        const data = {
            brand,
            model,
            imageUrl,
            release,
            designer,
            value
        }

        shoeService.editOne(ctx.params.shoeId,data)
        .then(() => {
            ctx.page.redirect(`/details/${ctx.params.shoeId}`)
        })
    }

    shoeService.getOne(ctx.params.shoeId)
    .then((shoe) => {
        ctx.render(editTemplate(submitHandler,shoe))
    })
}