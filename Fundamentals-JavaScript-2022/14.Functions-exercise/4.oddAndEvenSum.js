function oddEvenSum(number) {
    let sumOdd = 0;
    let sumEven = 0;
let convertToString = number.toString();
let arr = convertToString.split('')

for(let i = 0; i < arr.length; i++) {
    if(Number(arr[i] % 2 === 0)) {
        sumEven += Number(arr[i])
    }
    else {
        sumOdd += Number(arr[i])
    }
}

let result = `Odd sum = ${sumOdd}, Even sum = ${sumEven}`
return result
}

console.log(oddEvenSum(1000435))
console.log(oddEvenSum(3495892137259234))