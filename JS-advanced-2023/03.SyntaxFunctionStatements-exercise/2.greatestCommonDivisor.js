function greatestCommonDivisor(n1,n2) {
count = 1;
let common = 0;

while(count !== n1) {
if(n1%count === 0 && n2%count === 0) {
common = count
}
count++
    
}
console.log(common);
}

greatestCommonDivisor(15,5)
greatestCommonDivisor(2154, 458)