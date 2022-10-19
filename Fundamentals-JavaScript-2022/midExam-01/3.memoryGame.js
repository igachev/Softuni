function memoryGame(input) {
    let index = 0;
    let countMovements = 0;
let sequenceOfElements = input.shift().split(' ')


    while(input[index] !== 'end' && input.length > 1) {
        
    let [firstIndex,secondIndex] = input[index].split(' ')
    firstIndex = Number(firstIndex)
    secondIndex = Number(secondIndex)

if(sequenceOfElements[firstIndex] === sequenceOfElements[secondIndex]) {
    console.log(`Congrats! You have found matching elements - ${sequenceOfElements[firstIndex]}!`);
    if(firstIndex > 0) {
        sequenceOfElements.splice(firstIndex-1,1)
    }
    else {
        sequenceOfElements.splice(firstIndex,1)
    }
    if(secondIndex > 0) {
        sequenceOfElements.splice(secondIndex-1,1)
    }
    else {
        sequenceOfElements.splice(secondIndex,1)
    }
    
    countMovements++
    if(sequenceOfElements.length === 0 || sequenceOfElements.length === 1) {
        console.log(`You have won in ${countMovements} turns!`);
        return;
    }
    }

    else if(firstIndex === secondIndex || 
        firstIndex < 0 ||
        firstIndex >= sequenceOfElements.length || 
        secondIndex < 0 || 
        secondIndex >= sequenceOfElements.length) {
        countMovements++
        let middle = Math.trunc(sequenceOfElements.length / 2);
        let symbol = '-'+countMovements+'a'
        sequenceOfElements.splice(middle,0,symbol,symbol)
        console.log('Invalid input! Adding additional elements to the board');
        }
        else {
            console.log('Try again!');
        }

        

     index++;
}

    console.log('Sorry you lose :(');
console.log(sequenceOfElements.join(' '));
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]) 

    memoryGame([
        "a 2 4 a 2 4", 
        "0 3", 
        "0 2",
        "0 1",
        "0 1", 
        "end"
        ])

    memoryGame([
        "a 2 4 a 2 4", 
        "4 0", 
        "0 2",
        "0 1",
        "0 1", 
        "end"
        ])