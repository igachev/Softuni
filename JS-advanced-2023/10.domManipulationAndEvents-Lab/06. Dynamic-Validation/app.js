function validate() {
 let emailField = document.getElementById('email')
 let checkEmail = new RegExp("^([a-z]+\@[a-z]+\.[a-z]+)$","g")
 emailField.addEventListener('change',() => {
    let currentEmail = document.getElementById('email').value;
    let check = currentEmail.match(checkEmail)
    if(check === null) {
        emailField.classList.add('error')
    }
    else {
        emailField.classList.remove('error')
    }
 })
}