import { html } from '../../node_modules/lit-html/lit-html.js'
import * as userService from '../services/userService.js'

const registerTemplate = (submitHandler) => html`
<section id="register-page" class="auth">
    <form @submit=${submitHandler} id="register">
        <h1 class="title">Register</h1>

        <article class="input-group">
            <label for="register-email">Email: </label>
            <input type="email" id="register-email" name="email">
        </article>

        <article class="input-group">
            <label for="register-password">Password: </label>
            <input type="password" id="register-password" name="password">
        </article>

        <article class="input-group">
            <label for="repeat-password">Repeat Password: </label>
            <input type="password" id="repeat-password" name="repeatPassword">
        </article>

        <input type="submit" class="btn submit-btn" value="Register">
    </form>
</section>
`;

export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const email = formData.get('email')
        const password = formData.get('password')
        const rePass = formData.get('repeatPassword')

        if(email === '' || password === '' || rePass === '') {
            alert('All fields are required!')
            return;
        }

        if(password !== rePass) {
            alert('Passwords do not match!')
            return;
        }

        userService.register(email,password)
        .then(() => {
            ctx.page.redirect('/dashboard')
        })
    }

    ctx.render(registerTemplate(submitHandler))
}