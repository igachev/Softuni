function addAndSubtract(input) {
let sumOldArray = 0;
let sumNew = 0;
let newArr = []
for(let i = 0; i < input.length; i++) {
    sumOldArray += input[i];

    if(input[i] % 2 === 0) {
        sumNew += input[i] + i;
        newArr.push(input[i] + i)
    }

    else if(input[i] % 2 !== 0) {
        sumNew += input[i] - i;
        newArr.push(input[i] - i)
    }

}
console.log(newArr);
console.log(sumOldArray);
console.log(sumNew);
}

addAndSubtract([5, 15, 23, 56, 35])
addAndSubtract([-5, 11, 3, 0, 2])