function melrahShake(input) {
let randomCharacters = input.shift()
let pattern = input.shift()

while(pattern !== '') {
    
   let first = randomCharacters.indexOf(pattern)
   let last = randomCharacters.lastIndexOf(pattern)

   if(first !== -1 && last !== -1 && first !== last) {
    let firstRemove = randomCharacters.substring(0,first)
    let lastRemove = randomCharacters.substring(first+pattern.length)
    randomCharacters = firstRemove + lastRemove

    let lastMatch = randomCharacters.lastIndexOf(pattern)
    firstRemove = randomCharacters.substring(0,lastMatch)
    lastRemove = randomCharacters.substring(lastMatch + pattern.length)
    randomCharacters = firstRemove + lastRemove

    let patternFirstPart = pattern.substring(0,pattern.length / 2)
    let patternSecondPart = pattern.substring((pattern.length / 2) + 1)
    pattern = patternFirstPart + patternSecondPart
    console.log('Shaked it.');
   } 

   else {
    break;
   }
}

console.log('No shake.');
console.log(randomCharacters);
}

melrahShake(['astalavista baby',
'sta'])

melrahShake(['##mtm!!mm.mm*mtm.#',
'mtm'])