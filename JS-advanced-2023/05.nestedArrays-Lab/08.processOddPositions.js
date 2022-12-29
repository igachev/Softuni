function processOddPositions(input) {
let oddPositions = input.filter((element,index,arr) => {
    return index % 2 !== 0
})

let doubleAndReverse = oddPositions.map((element) => {
    return element * 2
})

return doubleAndReverse.reverse().join(' ');
}

processOddPositions([10, 15, 20, 25])