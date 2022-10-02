function train(input) {
    let wagons = input.shift().split(' ')
    wagons = wagons.map((num) => Number(num))
    let maxCapacity = Number(input.shift())
    
    for(let i = 0; i < input.length; i++) {
        let [command,passengers] = input[i].split(' ')
        
        if (command === 'Add') {
                add(passengers)
        } 
        else {
            checkForMaxCapacity(command)
        }
        }
    
    function add(people) {
      people = Number(people)
      if(people <= maxCapacity) {
        wagons.push(people)
      }
    }
    
    function checkForMaxCapacity(people) {
        people = Number(people)
    for(let i = 0; i < wagons.length; i++) {
    if(wagons[i] + people <= maxCapacity) {
        wagons[i] += people
        break;
    }
    }
    }
    
    console.log(wagons.join(' '));
    }
    
    train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])
    
    train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'])