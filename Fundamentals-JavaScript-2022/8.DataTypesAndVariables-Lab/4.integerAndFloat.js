function integerOrFloat(n1,n2,n3) {
let sum = n1 + n2 + n3;

if(sum%1 === 0) {
    sum += ' - Integer'
}
else {
    sum += ' - Float'
}
console.log(sum);

}

integerOrFloat(9,100,1.1)
integerOrFloat(100,200,303)