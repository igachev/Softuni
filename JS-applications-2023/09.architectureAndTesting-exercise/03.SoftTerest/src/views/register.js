import { register } from "../api/users.js";

const section = document.getElementById('registerPage')
const form = section.querySelector('form')
form.addEventListener('submit',onRegister)

let ctx = null;

export function showRegister(context) {
    ctx = context
context.showSection(section)
}

async function onRegister(e) {
    e.preventDefault()
    const formData = new FormData(e.target)

    const email = formData.get('email')
    const password = formData.get('password')

    await register(email,password)
    ctx.updateNav()
    ctx.goTo('/')
}