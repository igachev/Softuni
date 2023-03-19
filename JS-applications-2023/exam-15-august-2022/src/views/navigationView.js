import {html} from '../../node_modules/lit-html/lit-html.js'

const loggedLinks = html `
<!-- Logged-in users -->
<div class="user">
            <a href="/create">Add Pair</a>
            <a href="/logout">Logout</a>
          </div>
`;

const guestLinks = html `
<!-- Guest users -->
<div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
`;

const navTemplate = (user) => html `
<!-- Navigation -->
<a id="logo" href="/"
          ><img id="logo-img" src="/images/logo.png" alt=""
        /></a>

        <nav>
          <div>
            <a href="/dashboard">Dashboard</a>
            <a href="/search">Search</a>
          </div>

          ${user
            ? loggedLinks
            : guestLinks}

        </nav>
`;

export const navView = (ctx) => {
 return navTemplate(ctx.user)
}