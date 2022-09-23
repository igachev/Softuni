function amazing(n) {
n = n.toString()
let sum = 0;
for(let i = 0; i < n.length; i++) {
sum += Number(n[i])
}
//console.log(sum);
let result = sum.toString().includes('9')

let output = result ? `${n} Amazing? True`
             : `${n} Amazing? False`;

             console.log(output);
}

amazing(1233)
amazing(999)