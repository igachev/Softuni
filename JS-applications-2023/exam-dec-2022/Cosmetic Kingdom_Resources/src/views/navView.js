import {html} from '../../node_modules/lit-html/lit-html.js'

const guestLinks =  html `
 <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
`;

const loggedUserLinks = html `
<div class="user">
            <a href="/create">Add Product</a>
            <a href="/logout">Logout</a>
          </div>
`;

const navTemplate = (user) => html `
<!-- Navigation -->
<a id="logo" href="/"
          ><img id="logo-img" src="/images/logo.png" alt=""
        /></a>

        <nav>
          <div>
            <a href="/products">Products</a>
          </div>

          <!-- Logged-in users -->
          ${user ? loggedUserLinks : guestLinks}

          <!-- Guest users -->
         
        </nav>
`;

export const navView = (ctx) => {
    return navTemplate(ctx.user)
}