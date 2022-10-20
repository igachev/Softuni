function manowar(input) {
    let statusOfPirateShip = input.shift().split('>').map(Number)
    let statusOfWarShip = input.shift().split('>').map(Number)
    let maxHealth = Number(input.shift())
    let index = 0;
    let needRepairIf = (20 / 100) * maxHealth
    let isLost = false;
    let isWon = false;
    
    while(input[index] !== 'Retire') {
        let text = input[index]
        let [command,number1,number2,number3] = text.split(' ')
        number1 = parseInt(number1)
        number2 = parseInt(number2)
        number3 = parseInt(number3)
    
        switch(command) {
            case 'Fire':
                fire(number1,number2)
                if(isWon) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
                else {
                    break;
                }
                
            case 'Defend':
                defend(number1,number2,number3)
            if(isLost) {
            console.log("You lost! The pirate ship has sunken.");
                return;
                    }
            else {
                break;
                    }
                
            case 'Repair':
                repair(number1,number2)
            break;
    
            case 'Status':
                pirateShipStatus()
            break;
    
        }
        index++
    }
    
        statusOfBothShips()
    
    function fire(index,damage) {
        if(index >= 0 && index < statusOfWarShip.length) {
            for(let i = 0; i < statusOfWarShip.length; i++) {
                if(i === index) {
                    statusOfWarShip[i] -= damage
                    if(statusOfWarShip[i] <= 0 ) {
                        isWon = true;
                    return;
                    }
                }
            }
        }
        return statusOfWarShip
    }
    
    function defend(startIndex,endIndex,damage) {
        
        if(startIndex >= 0 && startIndex < statusOfPirateShip.length &&
            endIndex >= 0 && endIndex < statusOfPirateShip.length &&
            startIndex !== endIndex) {
        for(let i = startIndex; i <= endIndex; i++) {
            statusOfPirateShip[i] -= damage
    
            if(statusOfPirateShip[i] <= 0) {
                isLost = true;
                return;
            }    
        }
    }
    return statusOfPirateShip           
}
    
    function repair(index,health) {
        if(index >= 0 && index < statusOfPirateShip.length) {
            for(let i = 0; i < statusOfPirateShip.length; i++) {
                if(i === index) {
                    statusOfPirateShip[i] += health
                    
                    if(statusOfPirateShip[i] > maxHealth) {
                        statusOfPirateShip[i] = maxHealth;
                    }
                }
            }
        }
        return statusOfPirateShip
    }
    
    function pirateShipStatus() {
        let countRepair = 0;
        for(let i = 0; i < statusOfPirateShip.length; i++) {
            if(statusOfPirateShip[i] < needRepairIf) {
                countRepair++
            }
        }
    console.log(`${countRepair} sections need repair.`);
    }

    function statusOfBothShips() {
        let pirateShipSum = 0;
        let warShipSum = 0;
        for(let section of statusOfPirateShip) {
            pirateShipSum += section
        }
    
        for(let section of statusOfWarShip) {
            warShipSum += section
        }
    
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warShipSum}`);
    }
    
    }

manowar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])

manowar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])