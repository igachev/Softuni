function dungeon(input) {
let health = 100;
let coins = 0;
let text = '';
let number = 0;
let countRooms = 0;
let separate = input[0].split('|');
let separateBySpace = ''
//console.log(separate);
let separatedValues = [];

for(let i = 0; i < separate.length; i++) {
separateBySpace = separate[i].split(' ')
separatedValues.push(separateBySpace)
}
//console.log(separatedValues);

for(let value = 0; value < separatedValues.length; value++) {
    
    //console.log(separatedValues[value]);
    text = separatedValues[value][0]
    number = Number(separatedValues[value][1])
    //console.log(text);
    //console.log(number);
    if(text === 'potion') {
        let currentHealth = health;

        if(health < 100) {
            health += number;
            
            if(health > 100) {
               number = 100 - currentHealth;
                health = 100;
            }
        }
          
        console.log(`You healed for ${number} hp.`)
        console.log(`Current health: ${health} hp.`);
        countRooms++;
    }

    else if(text === 'chest') {
        console.log(`You found ${number} coins.`);
        coins += number;
        countRooms++;
    }

    else {
        health -= number;
        if(health > 0) {
            console.log(`You slayed ${text}.`);
            countRooms++;
        }
        else {
            countRooms++;
            console.log(`You died! Killed by ${text}.`);
            console.log(`Best room: ${countRooms}`);
            return;
        }
    }

}

if(countRooms === separatedValues.length) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
}

//dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])