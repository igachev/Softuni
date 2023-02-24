import { showCatalogView } from "./catalog.js";

export function checkUserNav() {
    const username = sessionStorage.getItem('username')
    if(username) {
    [...document.querySelectorAll('.guest')].forEach((guest) => {
        guest.style.display = 'none'
    });

    [...document.querySelectorAll('.user')].forEach((guest) => {
        guest.style.display = 'inline'
    })

    document.getElementById('welcome-msg').textContent = `Welcome, ${username}!`
    }
    else {
        [...document.querySelectorAll('.guest')].forEach((guest) => {
            guest.style.display = 'inline'
        });
    
        [...document.querySelectorAll('.user')].forEach((guest) => {
            guest.style.display = 'none'
        })
    }
}

document.getElementById('logout-link').addEventListener('click',onLogout)

async function onLogout() {
    e.preventDefault()
    const token = sessionStorage.getItem('accessToken')
    
    try {
       const res = await fetch('http://localhost:3030/users/logout',{
        method:'get',
        headers: {
            'X-Authorization': token
        }
    })

    if(res.ok !== true) {
        const error = await res.json()
        throw new Error(error.message)
    }
    } catch (err) {
        alert(err.message)
    } finally {
        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('accessToken')
        checkUserNav()
        showCatalogView()
    }
}