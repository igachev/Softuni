function validate() {
  let emailPattern = /(?<name>[a-z]+)@(?<domain>[a-z]+)\.(?<extension>[a-z]+)/gm
  let emailField = document.getElementById('email')
  
  emailField.addEventListener('change',() => {
    let emailValue = document.getElementById('email').value;
    if(!emailValue.match(emailPattern)) {
        emailField.classList.add('error')
    }
    else {
        emailField.classList.remove('error')
    }
  })
}