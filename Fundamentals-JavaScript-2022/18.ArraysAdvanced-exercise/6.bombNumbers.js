function bombNumbers(sequenceOfNumbers,specialBombNumber) {
    let bombNumber = specialBombNumber.shift()
    let bombPower = specialBombNumber.shift()
   let sum = 0;
    
    for(let i = 0; i < sequenceOfNumbers.length; i++) {
        if(sequenceOfNumbers[i] === bombNumber) {
            let bombIndex = sequenceOfNumbers.indexOf(bombNumber);
            let startIndex = Math.max(bombIndex-bombPower,0);
            sequenceOfNumbers.splice(bombIndex,bombPower+1 );
            sequenceOfNumbers.splice(startIndex,bombPower);
          i = 0;
        }
    }
    //console.log(sequenceOfNumbers);
    
    for(let value of sequenceOfNumbers) {
        sum += value;
    }
    console.log(sum);
    }

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])

bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3])

bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1])

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])