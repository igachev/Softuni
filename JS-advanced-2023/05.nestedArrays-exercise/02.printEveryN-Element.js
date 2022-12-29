function printEveryN(input,n) {
let arr = []
for(let i = 0; i < input.length; i = i + n) {
    arr.push(input[i])
}
return arr;
}

console.log(printEveryN(['5', 
'20', 
'31', 
'4', 
'20'], 
2))