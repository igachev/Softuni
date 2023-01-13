function sortArray(input,str) {
const obj = {
    asc:(a,b) => a - b,
    desc:(a,b) => b - a
}
return input.sort(obj[str])
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'))