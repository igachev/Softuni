import { html,nothing } from '../../node_modules/lit-html/lit-html.js'
import * as productService from '../services/productService.js'
import * as buyService from '../services/boughtService.js'

const detailsTemplate = (product,user) => html `
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${product.imageUrl} alt="example1" />
            <p id="details-title">${product.name}</p>
            <p id="details-category">
              Category: <span id="categories">${product.category}</span>
            </p>
            <p id="details-price">
              Price: <span id="price-number">${product.price}</span>$</p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Bought: <span id="buys">${updateBoughtCount(product._id)}</span> times.</h4>
                <span
                  >${product.description}</span
                >
              </div>
            </div>

            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">

           ${product._ownerId === user._id
            ? html `<a href="/products/edit/${product._id}" id="edit-btn">Edit</a>
              <a href="/products/delete/${product._id}" id="delete-btn">Delete</a>`
            : nothing}

              <!--Bonus - Only for logged-in users ( not authors )-->
              ${user.accessToken && product._ownerId !== user._id
                ? html `<a href="/products/buy/${product._id}" id="buy-btn">Buy</a>`
                : nothing}
            </div>
          </div>
        </section>
`;

export const detailsView = (ctx) => {

    productService.getOne(ctx.params.productId)
    .then((productDetail) => {
        ctx.render(detailsTemplate(productDetail,ctx.user))
    })
}

async function updateBoughtCount(productId) {
  const count = await buyService.totalBought(productId);
  document.getElementById('buys').textContent = count;
}