function magicMatrices(input) {
    let magicalOrNot = true;
    
    for(let row = 0; row < input.length-1; row++) {
       let firstRow = input[row].reduce((acc,el) => acc + el)
       let secondRow = input[row+1].reduce((acc,el) => acc + el)
       
        let firstColumn = 0;
        let secondColumn = 0;
    for(let column = 0; column < input.length; column++) {
        firstColumn += input[column][row];
        secondColumn += input[column][row+1];
    }
    if(firstRow !== secondRow || firstColumn !== secondColumn) {
        magicalOrNot = false;
        return magicalOrNot
    }
    }
    return magicalOrNot
}

console.log(magicMatrices([[4, 5, 6],
               [6, 5, 4],
               [5, 5, 5]]))

console.log(magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));