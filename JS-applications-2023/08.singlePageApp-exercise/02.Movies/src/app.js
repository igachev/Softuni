// [x] improve HTML structure
// [x] create app.js module
// [x] create util.js containing hide and display of view
// [x] placeholders for all views

import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { createPage } from "./create.js";
import { updateNav } from "./util.js";

// implement views
// - create request logic
// - DOM manipulation logic
// [x] catalog
// [x] login
// [x] register
// [x] create
// [x] details
// [x] like
// [ ] edit
// [ ] delete

//showView('#home-page')

const routes = {
    '/': homePage,
    '/login':loginPage,
    '/register':registerPage,
    '/create':createPage
   

}

const logoutBtn = document.querySelector('[data-logout="logout"]')
logoutBtn.addEventListener('click',logout)

document.querySelector('nav').addEventListener('click',onNavigate)
document.querySelector('#add-movie-button a').addEventListener('click',onNavigate)


function onNavigate(e) {
    if(e.target.tagName === 'A' && e.target.href) {
        e.preventDefault()
       const url = new URL(e.target.href);
      
       const view = routes[url.pathname]
       if(typeof view === 'function') {
        view()
       }
    }
}



async function logout(e) {
    e.preventDefault()
    let userData = JSON.parse(localStorage.getItem('user'))
    if(userData != null) {
       
        const token = userData.accessToken;
       // console.log(token);
        const res = await fetch('http://localhost:3030/users/logout',{
            method:'get',
            headers: {
                'Content-Type':'application/json',
                'X-Authorization':token
            }
        })
    localStorage.removeItem('user')
    
    updateNav()
    loginPage()
}
}



// start application in catalog view
updateNav()
homePage()