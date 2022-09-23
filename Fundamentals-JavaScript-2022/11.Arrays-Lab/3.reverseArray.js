function reverseArr(n,input) {
let newArr = [];
let output = '';
for(let i = 0; i < n; i++) { 
        newArr.push(input[i])
}

for(let j = newArr.length-1; j >= 0; j--) {
output += `${newArr[j]} `
}
console.log(output);
}

reverseArr(3,[10,20,30,40,50])
reverseArr(4,[-1,20,99,5])