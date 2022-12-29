function equalNeightbours(input) {
    let countPairs = 0;
for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input[i].length; j++) {

        if(input[i+1] !== undefined) {
            if(input[i][j] === input[i+1][j]) {
                countPairs++ 
            }
        }

        if(input[i][j] === input[i][j+1]) {
            countPairs++
        }
        
    }
    
}
return countPairs;
}

console.log(equalNeightbours([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]))

console.log(equalNeightbours([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]));

console.log(equalNeightbours([
    [2,2,5,7,4],
    [4,0,5,3,4],
    [2,5,5,4,2]
]))