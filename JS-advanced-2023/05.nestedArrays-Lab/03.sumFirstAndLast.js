function sumFirstAndLast(input) {
let sum = 0;
let first = Number(input.shift())
let last = Number(input.pop())
sum = first + last;
console.log(sum);
}

sumFirstAndLast(['20','30','40'])