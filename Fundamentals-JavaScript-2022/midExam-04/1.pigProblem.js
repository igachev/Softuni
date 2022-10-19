function pigProblem(input) {
let food = Number(input.shift()) * 1000
let hay = Number(input.shift()) * 1000
let cover = Number(input.shift())   * 1000
let pigWeight = Number(input.shift())   * 1000
let day = 1;

while(day <= 30) {
food -= 300;

if(day % 2 === 0) {
    let amountOfHay = (5 / 100) * (food);
    hay -= amountOfHay 
}

 if(day % 3 === 0) {
    let coverQuantity = pigWeight / 3;
    cover -= (coverQuantity)
}

if(food <= 0 || hay <= 0 || cover <= 0) {
    console.log("Merry must go to the pet store!");
    return;
}

    day++;
}
console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
}

pigProblem((["10", 
"5", 
"5.2", 
"1"]))

pigProblem(["1", 
"1.5", 
"3", 
"1.5"
])