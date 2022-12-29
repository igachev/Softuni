function squareOfStars(n = 5) {
for(let row = 0; row < n; row++) {
    let star = '*'
    let result = ''
    for(let column = 0; column < n; column++) {
        result += star + ' '
    }
    console.log(result);
}
}

squareOfStars()
squareOfStars(2)