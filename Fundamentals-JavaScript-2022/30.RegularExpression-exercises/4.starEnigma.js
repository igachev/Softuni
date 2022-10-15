function starEnigma(input) {
let numberOfMessages = input.shift()
let validMessages = []
let attackedPlanets = 0;
let destroyedPlanets = 0;

for(let i = 0; i < input.length; i++) {
    let decrypted = ''
    let decryptionKey = 0;
    let text = input[i]

    for(let k = 0; k < text.length; k++) {
        if(text[k].toLowerCase() === 's' ||
        text[k].toLowerCase() === 't' ||
        text[k].toLowerCase() === 'a' ||
        text[k].toLowerCase() === 'r') {
            decryptionKey++
        }
    }

   // console.log(text);
    for(let j = 0; j < text.length; j++) {
        let charValue = Number(text.charCodeAt(j)) - decryptionKey
        decrypted += String.fromCharCode(charValue)
    }
   // console.log(decrypted);

    let pattern = /@(?<planet>[A-Za-z]+)[^@\-!:>]*?:(?<population>[\d]+)[^@\-!:>]*?!(?<attackType>[AD]!)[^@\-!:>]*?->(?<soldierCount>\d+)/g
    let message = pattern.exec(decrypted)
    while(message != null) {
        let planet = message.groups['planet']
        let population = message.groups['population']
        let attackType = message.groups['attackType']
        if(attackType === 'A!') {
            attackedPlanets++
        }
        else {
            destroyedPlanets++
        }
        let soldierCount = message.groups['soldierCount']
    validMessages.push({planet,population,attackType,soldierCount})
        message = pattern.exec(decrypted)
    }
}

let sortAlphabetically = validMessages.sort((a,b) => a.planet.localeCompare(b.planet))
console.log(`Attacked planets: ${attackedPlanets}`);

for(let item of sortAlphabetically) {
    if(item.attackType === 'A!') {
console.log('-> ' + item.planet);
    }
}

console.log(`Destroyed planets: ${destroyedPlanets}`);

for(let item of sortAlphabetically) {
    if(item.attackType === 'D!') {
console.log('-> ' + item.planet);
    }
}
}

starEnigma(['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR'])

starEnigma(['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR'])