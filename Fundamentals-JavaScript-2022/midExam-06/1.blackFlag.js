function blackFlag(input) {
daysOfPlunder = Number(input.shift())
dailyPlunder = Number(input.shift())
expectedPlunder = Number(input.shift())
let totalPlunder = 0;
let day = 1;

while(day <= daysOfPlunder) {
    totalPlunder += dailyPlunder

    if(day % 3 === 0) {
        let bonusPlunder = (50 / 100) * dailyPlunder
        totalPlunder += bonusPlunder
    }

    if(day % 5 === 0) {
        let lostPlunder = (30 / 100) * totalPlunder
        totalPlunder -= lostPlunder
    }


    day++
}

if(totalPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
}
else {
    let percentage = (totalPlunder / expectedPlunder) * 100
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
}
}

blackFlag(["5",
"40",
"100"])

blackFlag(["10",
"20",
"380"])