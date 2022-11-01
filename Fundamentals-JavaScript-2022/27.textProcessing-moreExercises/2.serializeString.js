function serialize(input) {
let characters = input.shift()
let result = ''
let letter = ''
let usedLetters = []

for(let i = 0; i < characters.length; i++) {
    letter = characters[i]
    result = `${letter}:`

    for(let j = 0; j < characters.length; j++) {
        if(characters.charAt(i) === characters.charAt(j) && !usedLetters.includes(characters[i])) {
            result += `${j}/`
        }
    }

   if(result.length > 2) {
    console.log(result.substring(0,result.length-1));
   }
    usedLetters.push(characters[i])
}

}

serialize(["abababa"])
serialize(["avjavamsdmcalsdm"])