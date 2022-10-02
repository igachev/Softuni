function arrayManipulator(arrayOfNumbers,arrayOfCommands) {
    for(let i = 0; i < arrayOfCommands.length; i++) {
        let currentCommand = arrayOfCommands[i].split(' ')
        let command = currentCommand.shift()
        let index = Number(currentCommand.shift())
        let numbers = [...currentCommand]
        numbers = numbers.map(Number)
    
        if(command === 'print') {
            console.log('[ ' + arrayOfNumbers.join(', ') + ' ]');
            break;
           }
       
        switch(command) {
            
            case 'add':
            addAt(index,numbers[0])
            break;
    
            case 'addMany':
            addMany(index,numbers)
            break;
    
            case 'contains':
            containsNumber(index)
            break;
    
            case 'remove':
            removeAt(index)
            break;
    
            case 'shift':
            shift(index)
            break;
    
            case 'sumPairs':
            sumPairs()
            break;
    
            
        }
    }
    
    
    
    function addAt(index,number) {
            arrayOfNumbers.splice(index,0,number)   
    }
    
    function containsNumber(number) {
        console.log(arrayOfNumbers.indexOf(number))
    }
    
    function removeAt(index) {
        arrayOfNumbers.splice(index,1)
        
    }
    
    function shift(position) {
        for(let i = 0; i < position; i++) {
          let firstNumber = arrayOfNumbers.shift()
          arrayOfNumbers.push(firstNumber)
        }
        
    }
    
    function sumPairs() {
       
        let newArr = []
    
        if(arrayOfNumbers.length % 2 !== 0){
    
            arrayOfNumbers.push(0)
    
        }
    
        for(let i = 0; i < arrayOfNumbers.length; i+=2){
    
            let sum = arrayOfNumbers[i] + arrayOfNumbers[i + 1]
    
            newArr.push(sum)
    
        }
    
        arrayOfNumbers = newArr
        
    }
    
    function addMany(index,allNumbers) {
            arrayOfNumbers.splice(index,0, ...allNumbers)   
    }
    
    //console.log(arrayOfNumbers);
    }
    
    arrayManipulator([1, 2, 4, 5, 6, 7],
        ['add 1 8', 'contains 1', 'contains 3', 'print'])
    
     arrayManipulator([1, 2, 3, 4, 5],
       ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])