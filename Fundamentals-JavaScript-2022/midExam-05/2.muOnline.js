function muOnline(text) {
let initialHealth = 100;
let bitcoins = 0;
let index = 0;
let countRooms = 0;

let rooms = text.split('|')
while(index < rooms.length) {
    let [command,value] = rooms[index].split(' ')
    value = Number(value)

    switch(command) {
        case 'potion':
        potionCommand(value)
        break;

        case 'chest':
        chestCommand(value)
        break;

        default:
            let monster = command;
            let monsterAttack = value;
            initialHealth -= monsterAttack
        
            if(initialHealth > 0) {
                console.log(`You slayed ${monster}.`);
                countRooms++
            }
            else if(initialHealth <= 0) {
                countRooms++
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${countRooms}`);
                return;
            }
        break;
    }

    index++
}

console.log("You've made it!");
console.log(`Bitcoins: ${bitcoins}`);
console.log(`Health: ${initialHealth}`);


function potionCommand(number) {
   let healedValue = number;
   let healthBeforeHealing = initialHealth

if((initialHealth) < 100) {
    initialHealth += healedValue;
    if(initialHealth > 100) {
        healedValue = 100 - healthBeforeHealing;
        initialHealth = 100;
    }

    console.log(`You healed for ${healedValue} hp.`);
    console.log(`Current health: ${initialHealth} hp.`);
    countRooms++
}

}

function chestCommand(number) {
console.log(`You found ${number} bitcoins.`);
bitcoins += number
countRooms++
}

}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")