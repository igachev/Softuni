function getFibonator() {
let first = 0;
let second = 1;
return function() {
    let sum = first + second // 0+1 / 1+1 / 1+2 / 2+3 / 3+5
    first = second // 1 / 1 / 2 / 3 / 5
    second = sum; // 1 / 2 / 3 / 5 / 8
    return first; //1 / 1 / 2 / 3 / 5
}


}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13