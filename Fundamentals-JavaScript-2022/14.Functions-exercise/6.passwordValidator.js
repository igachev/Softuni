function passwordValidator(password) {

    let length = checkLength(password)
    let atLeastTwoDigits = twoDigits(password)
    let onlyLettersAndDigits = lettersAndDigits(password)

    if(length  && atLeastTwoDigits  && onlyLettersAndDigits) {
        console.log('Password is valid');
    }

    if(!length) {
        console.log('Password must be between 6 and 10 characters');
    }
    if(!onlyLettersAndDigits) {
        console.log('Password must consist only of letters and digits');
    }
    if(!atLeastTwoDigits) {
        console.log('Password must have at least 2 digits');
    }

    function checkLength(password) {
        if(password.length >= 6 && password.length <= 10) {
            return true;
        }
            return false;
    }

    function twoDigits(password) {
        let countDigits = 0;
        for(let i = 0; i < password.length; i++) {
            let characterValue = password[i].charCodeAt(0)
            if(characterValue >= 48 && characterValue <= 57) {
                countDigits++;
            }
        }
        if(countDigits >= 2) {
            return true;
        }
            return false
    }

    function lettersAndDigits(password) {
        let isLetterOrDigit = true;
        for(let i = 0; i < password.length; i++) {
            let characterValue = password[i].charCodeAt(0)

            if(characterValue >= 48 && characterValue <= 57 ||
            characterValue >= 97 && characterValue <= 122 ||
            characterValue >= 65 && characterValue <= 90) {
              isLetterOrDigit = true;
            }
            else {
                isLetterOrDigit = false;
                break;
            }
        }

        if(isLetterOrDigit) {
            return true;
        }
            return false;
    }
  
}

passwordValidator('logIn')
passwordValidator('Pa$s$s')
passwordValidator('MyPass123')