import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import * as shoeService from '../services/shoeService.js'


const searchCard = (shoe,user) => html `
<li class="card">
    <img src=${shoe.imageUrl} alt="travis" />
    <p>
        <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
    </p>
    <p>
        <strong>Model: </strong><span class="model">${shoe.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
    ${user
    ? html `<a class="details-btn" href="/details/${shoe._id}">Details</a>`
    : nothing}
</li>
`;

const searchTemplate = (submitHandler,shoes,user) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${submitHandler} class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
        <ul class="card-wrapper">
            <!-- Display a li with information about every post (if any)-->
        ${shoes.map((shoe) => searchCard(shoe,user))}
        </ul>

        <!-- Display an h2 if there are no posts -->
        <!--  -->
        ${shoes.length === 0
        ? html `<h2>There are no results found.</h2>`
        : nothing}
    </div>
</section>
`;

export const searchView = (ctx) => {
const submitHandler = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const searchValue = formData.get('search').trim()

    if(searchValue !== '') {
        shoeService.searchShoes(searchValue)
    .then((shoes) => {
        ctx.render(searchTemplate(submitHandler,shoes,ctx.user))
    })
    }
}

ctx.render(searchTemplate(submitHandler,[],ctx.user))

}