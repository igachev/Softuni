function palindrome(input) {

    for(let i = 0; i < input.length; i++) {
        palindromeChecker(input[i])
    }

    function palindromeChecker(number) {
        let reversedNumber = reverseNumber(number);
        if(number === reversedNumber) {
            console.log('true')
        }
        else {
            console.log('false');
        }
    }

    function reverseNumber(number) {
        let numberToString = number.toString()
        let result = ''
        for(let i = numberToString.length-1; i >= 0; i--) {
            result += numberToString[i]
        }
        let reversedNumber = parseInt(result)
        return reversedNumber;
    }

}

palindrome([123,323,421,121])
palindrome([32,2,232,1010])