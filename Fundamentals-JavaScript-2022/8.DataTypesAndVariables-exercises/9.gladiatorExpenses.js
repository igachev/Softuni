function gladiatorExpenses(lostFights,helmetPrice,swordPrice,shieldPrice,armorPrice) {
let totalExpenses = 0;
let brokenHelmetCounter = 0;
let brokenSwordCounter = 0;
let brokenShieldCounter = 0;
let brokenArmorCounter = 0;

for(let i = 1; i <= lostFights; i++) {
    if(i%2 === 0) {
        brokenHelmetCounter++;
    }

     if(i%3 === 0) {
        brokenSwordCounter++;
    }

    if(i%2 === 0 && i%3 === 0) {
        brokenShieldCounter++;

        if(brokenShieldCounter%2 === 0) {
            brokenArmorCounter++;
        }
    }
  
}

totalExpenses = helmetPrice * brokenHelmetCounter +
swordPrice * brokenSwordCounter + shieldPrice * brokenShieldCounter +
armorPrice * brokenArmorCounter;

console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);

}

gladiatorExpenses(7,2,3,4,5)
gladiatorExpenses(23,12.50,21.50,40,200)