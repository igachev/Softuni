function validate() {
    
    let submitBtn = document.querySelector('#submit')
   
   document.querySelector('#company').addEventListener('change',() => {
      
        if(document.querySelector('#company').checked) {
            document.getElementById('companyInfo').style.display = 'block'
        }
        else {
            document.getElementById('companyInfo').style.display = 'none'
        }
    })
    
   

   submitBtn.addEventListener('click',onClick)
    
   function onClick(event) {
    event.preventDefault()
    let booleanResults = []

    let usernameField = document.querySelector('#username')
   
   let emailField = document.querySelector('#email')
   let passwordField = document.querySelector('#password')
   let confirmPassword = document.querySelector('#confirm-password')
   
   let usernamePattern = /^[a-zA-Z0-9]{3,20}$/g
   let emailPattern = /^.*@.*\..*$/g
   let passwordPattern = /^[\w]{5,15}$/g
    
    let usernameValue = usernameField.value
    let testUsername = usernamePattern.test(usernameValue)
   
    if(!testUsername) {
        usernameField.style.borderColor = 'red'
        booleanResults.push(false)
    }
    else {
        usernameField.style.border = 'none' 
        booleanResults.push(true) 
    }

    let emailValue = emailField.value;
    let testEmail = emailPattern.test(emailValue)
    if(!testEmail) {
        emailField.style.borderColor = 'red'
        booleanResults.push(false)
    }
    else {
        emailField.style.border = 'none'
        booleanResults.push(true)
    }

    let passwordValue = passwordField.value;
    let confirmPasswordValue = confirmPassword.value;
    let testPassword = passwordPattern.test(passwordValue)
   
    if(!testPassword || passwordValue !== confirmPasswordValue ) {
        passwordField.style.borderColor = 'red'
        confirmPassword.style.borderColor = 'red'
        booleanResults.push(false)
    }
    else {
        passwordField.style.border = 'none'
        confirmPassword.style.border = 'none'
        booleanResults.push(true)
    }
   
        if(document.querySelector('#company').checked) {
        let companyNumberField = document.getElementById('companyNumber');
        let companyNumberValue = companyNumberField.value;
        

        if(companyNumberValue >= 1000 && 
        companyNumberValue <= 9999) {
                companyNumberField.style.border = 'none'
                booleanResults.push(true)
            }
            else {
                companyNumberField.style.borderColor = 'red'
                booleanResults.push(false)
            }
        }
        
      
    if(booleanResults.includes(false)) {
        document.querySelector("#valid").style.display = 'none'
    }
    
    else {
        document.querySelector("#valid").style.display = 'block' 
    }
   
   }
 
}
