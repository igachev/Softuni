function sum(arr) {
    arr = arr.map(Number)
let first = arr.shift()
let last = arr.pop()
let sum = first + last;
console.log(sum);
}

sum(['20','30','40'])
sum(['5','10'])