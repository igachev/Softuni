import {html} from '../../node_modules/lit-html/lit-html.js'
import * as userService from '../services/userService.js'

const loginTemplate = (submitHandler) => html `
<section id="login-page" class="auth">
            <form @submit=${submitHandler} id="login">
                <h1 class="title">Login</h1>

                <article class="input-group">
                    <label for="login-email">Email: </label>
                    <input type="email" id="login-email" name="email">
                </article>

                <article class="input-group">
                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password">
                </article>

                <input type="submit" class="btn submit-btn" value="Log In">
            </form>
        </section>
`;

export const loginView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const email = formData.get('email')
        const password = formData.get('password')

        if(email === '' || password === '') {
            alert('All fields are required!')
            return;
        }

        userService.login(email,password)
        .then(() => {
            ctx.page.redirect('/dashboard')
        })
    }

    ctx.render(loginTemplate(submitHandler))
}