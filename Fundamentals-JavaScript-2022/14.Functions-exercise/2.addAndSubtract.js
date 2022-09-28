function addAndSubtract(n1,n2,n3) {

    let sum = () => n1 + n2;
    let sumOfn1n2 = sum()
   // console.log(sumOfn1n2);

   let subtract = () => sumOfn1n2 - n3;
   let result = subtract()
    
    console.log(result);
    
}

addAndSubtract(23,6,10)
addAndSubtract(1,17,30)