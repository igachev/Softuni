function diagonalSums(input) {
let firstIndex = 0;
let secondIndex = input[0].length-1;
let firstDiagonal = 0;
let secondDiagonal = 0;

for(let row = 0; row < input.length; row++) {
firstDiagonal += input[row][firstIndex]
secondDiagonal += input[row][secondIndex]

firstIndex++
secondIndex--
}
console.log(firstDiagonal + ' ' + secondDiagonal);
}

diagonalSums([
    [20, 40],
    [10, 60]
])