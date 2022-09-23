function reverse(input) {
for(let i = 0; i < input.length / 2; i++) {
    let oldElement = input[i]
    
    let previousIndex = input.length - 1 - i;
    input[i] = input[previousIndex]
    input[previousIndex] = oldElement;
}
console.log(input.join(' '));
}

reverse(['a', 'b', 'c', 'd', 'e'])