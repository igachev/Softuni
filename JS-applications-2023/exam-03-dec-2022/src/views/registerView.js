import {html} from '../../node_modules/lit-html/lit-html.js'
import * as userService from '../services/userService.js'

const registerTemplate = (submitHandler) => html `
<section id="register">
        <div class="form">
          <h2>Register</h2>
          <form @submit=${submitHandler} class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
          </form>
        </div>
      </section>
`;

export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)

        const email = formData.get('email').trim()
        const password = formData.get('password').trim()
        const rePass = formData.get('re-password').trim()

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
            ctx.page.redirect('/')
        })
    }

    ctx.render(registerTemplate(submitHandler))
}