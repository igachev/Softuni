

window.addEventListener('DOMContentLoaded',() => {
    document.getElementById('user').style.display = 'none'

    document.querySelectorAll('a').forEach((link) => 
    link.classList.remove('active'));
    document.getElementById('login').classList.add('active')

   const form =  document.querySelector('form')
   form.addEventListener('submit',onLogin)
})

async function onLogin(e) {
    e.preventDefault()
    const errorNotification = document.querySelector('p.notification')
    const formData = new FormData(e.target)

    const email = formData.get('email')
    const password = formData.get('password')

  try {
    const res =  await fetch('http://localhost:3030/users/login',{
        method:'post',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email,password})
    })

    if(res.ok != true) {
        const error = await res.json()
        e.target.reset()
        throw new Error(error.message)
    }

    const data = await res.json()

    const username = data.email.split('@');

    const userData = {
        email:data.email,
        id:data._id,
        token:data.accessToken,
        userName:username[0][0].toUpperCase() + username[0].slice(1)
    }
    
    sessionStorage.setItem('userData',JSON.stringify(userData))
    window.location = './index.html'
  } catch (error) {
  errorNotification.textContent = error.message
  }
}