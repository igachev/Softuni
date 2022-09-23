function pyramid(base,increment) {
    let stone = 0;
    let marble = 0;
    let counter = 0;
    let lapis = 0;
    let gold = 0;
    
    let countHeight = 1;
    let condition;

    if(base%2 === 0) {
        condition = 2;
    }
    else {
        condition = 1;
    }
    
for(let i = base; i > condition; i=i-2) {
    counter++;
    countHeight++;

        stone += (i-2) * (i-2) * increment;

    if(counter !== 5) {
        marble += ((i*4) - 4) * increment;
    }

    else if(counter === 5) {
        lapis += ((i*4) - 4) * increment;
        counter = 0;
    }
    
}


gold = condition *condition * increment;
let pyramidHeight = countHeight * increment;
console.log(`Stone required: ${Math.ceil(stone)}`)
console.log(`Marble required: ${Math.ceil(marble)}`)
console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`)
console.log(`Gold required: ${Math.ceil(gold)}`)
console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`)
}

pyramid(23,0.5)