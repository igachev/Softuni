function firstAndLast(input) {
let k = input.shift();

console.log(input.slice(0,k).join(' '));
console.log(input.slice(input.length - k,input.length).join(' '));
}

firstAndLast([2,

    7, 8, 9])

   firstAndLast([3, 6, 7, 8, 9])