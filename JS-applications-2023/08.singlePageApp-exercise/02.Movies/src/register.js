import { homePage } from "./home.js"
import { showView, updateNav } from "./util.js"

const registerSection = document.querySelector('#form-sign-up')
const form = registerSection.querySelector('form')

form.addEventListener('submit',onSubmit)

export function registerPage() {
    showView(registerSection)
}

async function onSubmit(e) {
e.preventDefault()
const formData = new FormData(e.target)
let email = formData.get('email')
let password = formData.get('password')
let repeatPassword = formData.get('repeatPassword')

try {
    if(email === '') {
        throw new Error('email field cannot be empty')
    }
    else if(password.length < 6) {
        throw new Error('password must be at least 6 characters long')
    }
    else if(password !== repeatPassword) {
        throw new Error('password must be the same as repeat password!')
    }
await register(email,password)
//form.reset()
updateNav()
homePage()
} catch (err) {
    alert(err.message)
}
}

async function register(email,password) {
    
        const res = await fetch('http://localhost:3030/users/register',{
            method:'post',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email,password})
        })

        if(!res.ok) {
            const error = await res.json()
            throw new Error(error.message)
        }

}