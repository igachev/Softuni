function lift(input) {
let peopleWaiting = input.shift()
let maxPeopleOnWagon = 4;
let splitWagons = input[0].split(' ')
splitWagons = splitWagons.map(Number)
for(let i = 0; i < splitWagons.length; i++) {
    while(splitWagons[i] < maxPeopleOnWagon) {
        if(peopleWaiting === 0) {
            break;
        }
        splitWagons[i]++;
        peopleWaiting--;
        
    }
}



    for(let value of splitWagons) {
        if(value < 4) {
            console.log('The lift has empty spots!');
            break;
    }
}

if(peopleWaiting > 0) {
    console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
}


console.log(splitWagons.join(' '));

}

lift([
    "15",
    "0 0 0 0 0"
   ])

lift([
    "20",
    "0 2 0"
   ])