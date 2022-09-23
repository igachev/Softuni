function evenAndOdd(input) {
    let sumEven = 0;
    let sumOdd = 0;
    let result = 0;

for(let i = 0; i < input.length; i++) {
    if(input[i] % 2 === 0) {
sumEven += input[i]
    }

    else {
        sumOdd += input[i]
    }
}

result = sumEven - sumOdd
console.log(result);
}

evenAndOdd([1,2,3,4,5,6])