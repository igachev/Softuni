import { html } from '../../node_modules/lit-html/lit-html.js'
import * as productService from '../services/productService.js'

const productTemplate = (product) => html `
<div class="product">
            <img src=${product.imageUrl} alt="example1" />
            <p class="title">
              ${product.name}
            </p>
            <p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
            <a class="details-btn" href="/products/details/${product._id}">Details</a>
          </div>
`;

const productsTemplate = (allProducts) => html `
    <h2>Products</h2>
        <section id="dashboard">
    ${allProducts.length !== 0  
    ? allProducts.map((product) => productTemplate(product))
    : html `<h2>No products yet.</h2>`}
        </section>
`;

export const productsView = (ctx) => {
    productService.allProducts()
    .then((products) => {
        ctx.render(productsTemplate(products))
    })
}