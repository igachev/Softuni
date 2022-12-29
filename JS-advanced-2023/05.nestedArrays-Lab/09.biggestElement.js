function biggestElement(input) {
    let max = input[0][0];
    for(let i = 0; i < input.length; i++) {
      for(let j = 0; j < input[i].length; j++) {
        if(input[i][j] > max) {
            max = input[i][j]
        }
      }
    }
    return max;
}

console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]))