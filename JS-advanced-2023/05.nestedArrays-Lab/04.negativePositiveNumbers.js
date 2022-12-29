function negativePositiveNumbers(input) {
let newArr = []
for(let i = 0; i < input.length; i++) {
    if(input[i] < 0) {
        newArr.unshift(input[i])
    }
    else {
        newArr.push(input[i])
    }
}
console.log(newArr.join('\n'));
}

negativePositiveNumbers([7,-2,8,9])