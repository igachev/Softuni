function postOffice(input) {
let storage = new Map()
let [firstPart,secondPart,thirdPart] = input.toString().split('|')
let letterPattern = /([\$\#\%\*\&])(?<chars>[A-Z]+)(\1)/g
let wordTest = letterPattern.exec(firstPart)
let word = wordTest.groups.chars;
let wordArr = word.split('');


let asciiArr = []
let lengthArr = []
let startingLetterPattern = /(?<ascii>[\d]{2}):(?<length>[\d]{2})/g
let startingLetterTest = startingLetterPattern.exec(secondPart)

while(startingLetterTest != null) {
    let ascii = startingLetterTest.groups.ascii
    let length = startingLetterTest.groups.length
    asciiArr.push(ascii)
    lengthArr.push(length)
    startingLetterTest = startingLetterPattern.exec(secondPart)
}

thirdPart = thirdPart.split(' ')
asciiArr = asciiArr.map(Number)
lengthArr = lengthArr.map(Number)
//console.log(wordArr);
//console.log(asciiArr)
//console.log(lengthArr);
for(let w = 0; w < wordArr.length; w++) {
    for(let q = 0; q < asciiArr.length; q++) {
        if(wordArr[w].charCodeAt() === asciiArr[q]) {
            let length = lengthArr[q] + 1
             storage.set(wordArr[w],length)
        }
    }
}

let keys = Array.from(storage.keys())
for(let key of keys) {
    let firstLetter = key
    let length = storage.get(key);

for(let i = 0; i < thirdPart.length; i++) {
    if(firstLetter === thirdPart[i][0] &&
        length === thirdPart[i].length) {
            console.log(thirdPart[i]);
        }
}
}

}

postOffice('sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos')
postOffice('Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig')
