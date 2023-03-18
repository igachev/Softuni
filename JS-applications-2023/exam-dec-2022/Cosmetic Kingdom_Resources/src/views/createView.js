import { html } from '../../node_modules/lit-html/lit-html.js'
import * as productService from '../services/productService.js'

const createTemplate = (submitHandler) => html `
<section id="create">
          <div class="form">
            <h2>Add Product</h2>
            <form @submit=${submitHandler} class="create-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Product Name"
              />
              <input
                type="text"
                name="imageUrl"
                id="product-image"
                placeholder="Product Image"
              />
              <input
                type="text"
                name="category"
                id="product-category"
                placeholder="Category"
              />
              <textarea
                id="product-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              ></textarea>
              
              <input
                type="text"
                name="price"
                id="product-price"
                placeholder="Price"
              />

              <button type="submit">Add</button>
            </form>
          </div>
        </section>
`;

export const createView = (ctx) => {

    const submitHandler = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const name = formData.get('name')
        const imageUrl = formData.get('imageUrl')
        const category = formData.get('category')
        const description = formData.get('description')
        const price = formData.get('price')

        if(name === '' || imageUrl === '' || category === '' ||
        description === '' || price === '') {
            alert('All Fields Are Required!')
            return;
        }

        const data = {
            name,
            imageUrl,
            category,
            description,
            price
        }

        productService.createProduct(data)
        .then(() => {
            ctx.page.redirect('/products')
        })
    }

    ctx.render(createTemplate(submitHandler))
}