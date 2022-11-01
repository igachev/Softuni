function treasureFinder(input) {
let key = input.shift().split(' ')
let index = 0;


while(input[index] !== 'find') {
    let text = input[index]
    let position = 0;
    let decryptedWord = ''

    for(let i = 0; i < text.length; i++) {
        let asciiValue = text[i].charCodeAt();
        let updateValue = asciiValue - Number(key[position])
        decryptedWord += String.fromCharCode(updateValue)
        position++

        if(position === key.length) {
            position = 0;
        }

    }
    text = text.replace(text,decryptedWord)
    let treasureFirstIndex = text.indexOf('&')
    let treasureLastIndex = text.lastIndexOf('&')
    let treasure = text.substring(treasureFirstIndex+1,treasureLastIndex)
    let positionFirstIndex = text.indexOf('<')
    let positionLastIndex = text.indexOf('>')
    let coordinates = text.substring(positionFirstIndex+1,positionLastIndex)
    console.log(`Found ${treasure} at ${coordinates}`);
    index++
}
}

treasureFinder(["1 2 1 3",
"ikegfp'jpne)bv=41P83X@",
"ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
"find"])