function smallestTwo(input) {
let sortNums = input.sort((a,b) => {
    return a - b;
})
let firstTwo = sortNums.filter((item,index) => index < 2)

//console.log(sortNums);
console.log(firstTwo.join(' '));
}

smallestTwo([30, 15, 50, 5])