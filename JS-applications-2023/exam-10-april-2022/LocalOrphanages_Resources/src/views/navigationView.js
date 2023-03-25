import {html} from '../../node_modules/lit-html/lit-html.js'

const guestLinks = html `
<div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
`;

const loggedUserLinks = html `
<div id="user">
        <a href="/posts">My Posts</a>
        <a href="/create">Create Post</a>
        <a href="/logout">Logout</a>
    </div>
`;

const navigationTemplate = (user) => html `
 <!-- Navigation -->
 <h1><a href="/">Orphelp</a></h1>

<nav>
    <a href="/dashboard">Dashboard</a>
    
    ${user 
    ? loggedUserLinks
    : guestLinks}
    
</nav>
`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user)
}