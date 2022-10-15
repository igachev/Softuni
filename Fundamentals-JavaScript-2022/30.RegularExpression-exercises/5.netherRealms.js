function netherRealms(input) {
let pattern = /[, ]+/g
let splitStr = input.split(pattern)
let demonHealth = 0;
let baseDamage = 0;

let demons = {}

for(let i = 0; i < splitStr.length; i++) {
    
    let demonName = splitStr[i]
    let healthPattern = /[^0-9\.\/+*-]/g;
    let damagePattern = /[+-]?\d+\.?\d*/g;
    let multiplyDividePattern = /\*|\//g;

let health = healthPattern.exec(splitStr[i])
let dmg = damagePattern.exec(splitStr[i])

while(health != null) {
    let letter = health[0].charCodeAt(0)
    demonHealth += Number(letter)
    health = healthPattern.exec(splitStr[i])
}
//console.log(demonHealth);


while(dmg != null) {
    baseDamage += Number(dmg[0])
    dmg = damagePattern.exec(splitStr[i])
}


let additionalOperations = multiplyDividePattern.exec(splitStr[i])

    while(additionalOperations != null) {
        if(additionalOperations[0] === '*') {
            baseDamage *= 2;
        }
        else {
            baseDamage /= 2;
        }
        additionalOperations = multiplyDividePattern.exec(splitStr[i])
    }



//console.log(baseDamage);
demons[demonName] = {}
demons[demonName]['health'] = demonHealth
demons[demonName]['damage'] = baseDamage
baseDamage = 0;
demonHealth = 0
}

let sortByName = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));

for(let [name,values] of sortByName) {
    console.log(`${name} - ${values['health']} health, ${values['damage'].toFixed(2)} damage`);
}

}

netherRealms('M3ph-0.5s-0.5t0.0**')
netherRealms('M3ph1st0**, Azazel')