function rotateArray(input,amountOfRotation) {
for(let i = 0; i < amountOfRotation; i++) {
    let lastElement = input.pop()
    input.unshift(lastElement)
}
console.log(input.join(' '));
}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2)