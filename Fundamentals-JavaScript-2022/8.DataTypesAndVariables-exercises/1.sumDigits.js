function sum(n) {
    let sumDigits = 0;
let convertToStr = n.toString();
for(let i = 0; i < convertToStr.length; i++) {
    
    sumDigits += Number(convertToStr[i])
}
console.log(sumDigits);
}

sum(245678)
sum(543)