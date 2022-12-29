function sortingNumbers(input) {
let newArr = []
let sortedArr = input.sort((a,b) => a - b)
for(let i = 0; i < sortedArr.length; i++) {
    if(i < sortedArr.length / 2) {
        newArr.push(sortedArr[i])
    }
   if(sortedArr.length-1-i >= sortedArr.length / 2) {
    newArr.push(sortedArr[sortedArr.length-1-i])
   }
    
}
return newArr;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))