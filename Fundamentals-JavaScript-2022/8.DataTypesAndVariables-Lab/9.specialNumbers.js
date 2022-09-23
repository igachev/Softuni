function special(n) {
for(let i = 1; i <= n; i++) {
    let sum = 0;
    let lastDigit = 0;
    let firstDigit = 0;
    let str = ''

    if(i >= 10) {
        firstDigit = parseInt(i / 10);
    }

    lastDigit = i%10;

     sum = firstDigit + lastDigit;

    if(sum === 5 || sum === 7 || sum === 11) {
        str = 'True'
    }
    else {
        str = 'False'
    }
    let output = `${i} -> ${str}`;
    console.log(output);
     
}
}

//special(15)
special(20)

/* another way 
function specialNumbers(n) {
    for(let i = 1; i <= n; i++) {
      let sumOfDigits = 0;
     let numberToString = i.toString();
   
      for(let j = 0; j < numberToString.length; j++) {
        sumOfDigits += Number(numberToString[j]);
      }
   
      if(sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11) {
        console.log(`${i} -> True`)
      }
      else {
        console.log(`${i} -> False`)
      }
   
    }
  }
*/