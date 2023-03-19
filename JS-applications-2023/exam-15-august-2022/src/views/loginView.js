import {html} from '../../node_modules/lit-html/lit-html.js'
import * as userService from '../services/userService.js'

const loginTemplate = (submitHandler) => html `
<section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${submitHandler} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>
`;

export const loginView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const email = formData.get('email').trim()
        const password = formData.get('password').trim()

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