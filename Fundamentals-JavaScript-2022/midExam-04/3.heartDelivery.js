function heartDelivery(input) {
let neighborhood = input.shift().split('@').map(Number)
let index = 0;
let sumJumpLength = 0;
let lastPosition;

while(input[index] !== 'Love!') {
    let text = input[index]
    let [command,jumpLength] = text.split(' ')
    jumpLength= parseInt(jumpLength)

    sumJumpLength += jumpLength

    if(sumJumpLength >= neighborhood.length) {
        sumJumpLength = 0;
    }

    
    if(neighborhood[sumJumpLength] === 0) {
        console.log(`Place ${sumJumpLength} already had Valentine's day.`);
        lastPosition = sumJumpLength
    }
        
    else {
        neighborhood[sumJumpLength] -= 2
    if(neighborhood[sumJumpLength] < 0) {
        neighborhood[sumJumpLength] = 0;
    }
    lastPosition = sumJumpLength
    if(neighborhood[sumJumpLength] === 0) {
            console.log(`Place ${sumJumpLength} has Valentine's day.`);
        }
        }

    index++
}

console.log(`Cupid's last position was ${sumJumpLength}.`);
let missionSuccessfulOrNot = checkForZeroes(neighborhood)

if(missionSuccessfulOrNot) {
    console.log('Mission was successful.');
}
else {
    let countFails = countFailedHouses(neighborhood)
    console.log(`Cupid has failed ${countFails} places.`);
}

function checkForZeroes(arr) {
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] !== 0) {
            return false;
        }
    }
    return true;
}

function countFailedHouses(arr) {
    let count = 0;
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] !== 0) {
           count++;
        }
    }
    return count;
}

}
/*
heartDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"]) */

heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])