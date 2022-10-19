function counterStrike(input) {
let initialEnergy = Number(input.shift())
let index = 0;
let countWonBattles = 0;

while(input[index] !== 'End of battle') {
    let distance = Number(input[index])

    if(initialEnergy >= distance) {
        initialEnergy -= distance
        countWonBattles++
        if(countWonBattles % 3 === 0) {
            initialEnergy += countWonBattles
        }
    }

     else if(initialEnergy < distance) {
        console.log(`Not enough energy! Game ends with ${countWonBattles} won battles and ${initialEnergy} energy`);
        return;
    }
    index++
}

console.log(`Won battles: ${countWonBattles}. Energy left: ${initialEnergy}`);

}

counterStrike((["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"]))

counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])