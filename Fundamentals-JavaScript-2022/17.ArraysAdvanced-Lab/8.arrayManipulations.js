function arrayManipulations(input) {
    let numbers = input.shift().split(' ')
    
    for(let i = 0; i < input.length; i++) {
        let splitBySpace = input[i].split(' ')
        let command = splitBySpace[0]
        let number1 = splitBySpace[1]
        let number2 = splitBySpace[2]
        
        switch(command) {
            case 'Add':
            add(number1)
            break;
    
            case 'Remove':
            remove(number1)
            break;
    
            case 'RemoveAt':
            removeAt(number1)
            break;
    
            case 'Insert':
            insert(number1,number2)
            break;
        }
    }
    
    function add(number) {
        numbers.push(number)
    }
    
    function remove(number) {
        for(let i = 0; i < numbers.length; i++) {
            if(numbers[i] === number) {
                numbers.splice(i,1)
            }
        }
    }
    
    function removeAt(index) {
        numbers.splice(index,1)
    }
    
    function insert(number,index) {
        numbers.splice(index,0,number)
    }
    
    console.log(numbers.join(' '));
    }
    
    arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])