

window.addEventListener('DOMContentLoaded',() => {
    document.getElementById('user').style.display = 'none'

    document.querySelectorAll('a').forEach((link) => 
    link.classList.remove('active'));
    document.getElementById('register').classList.add('active')

    const form =  document.querySelector('form')
    form.addEventListener('submit',onRegister)
 })

 async function onRegister(e) {
    e.preventDefault()
    const errorNotification = document.querySelector('p.notification')
    const formData = new FormData(e.target)
    const email = formData.get('email')
    const password = formData.get('password')
    const rePass = formData.get('rePass')

    

    try {
        if(password !== rePass ) {
            
             e.target.reset()
             errorNotification.textContent = 'Error!Password and Repeat password must be the same!'
             return
         }
         
        const res =  await fetch('http://localhost:3030/users/register',{
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
       
        window.location = './index.html'
        
    } catch (err) {
        errorNotification.textContent = err.message;
    }
 }