//register event listeners to navigation
//switch view
// handle form submit
// send login information to REST service
// store authorization token

import { checkUserNav } from "./auth.js"
import { showCatalogView } from "./catalog.js"

document.getElementById('login-link').addEventListener('click',showLoginView)

document.getElementById('login-form').addEventListener('submit',onLogin)

function showLoginView() {
    [...document.querySelectorAll('section')].forEach((s) => {
        s.style.display = 'none'
    })

    document.getElementById('login-view').style.display = 'block'
}

async function onLogin(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const {email,password} = Object.fromEntries(formData)
    //console.log(email,password);
    try {
        await login(email,password)
        checkUserNav()
        showCatalogView()
    } catch (err) {
    alert(err.message)
}
}

async function login(email,password) {
    
        const res = await fetch(`http://localhost:3030/users/login`,{
    method:'post',
    headers: {
        'Content-Type':'application/json'
    },
    body:JSON.stringify({email,password})
})

    if(res.ok !== true) {
        const error = await res.json()
        throw new Error(error.message)
    }

    const data = await res.json()

    sessionStorage.setItem('userId',data._id)
    sessionStorage.setItem('username',data.username)
    sessionStorage.setItem('accessToken',data.accessToken)
 
}