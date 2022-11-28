function emojiDetector(input) {
let text = input[0]
let countAllValidWords = 0;
let wordPattern = /(?<symbols>\:{2}|\*{2})(?<word>[A-Z][a-z]{2,})\1/g
let validWords = []
let validWord = wordPattern.exec(text)

let digitsPattern = /\d/g
let allDigits = text.match(digitsPattern);
allDigits = allDigits.map(Number)
let coolThreshold = 1;
for(let num of allDigits) {
   coolThreshold *= num;
}



while(validWord !== null) {
    let word = validWord.groups.word;
    let symbol = validWord.groups.symbols

    countAllValidWords++
    let sumAscii = 0;

    for(let i = 0; i < word.length; i++) {
        sumAscii += word[i].codePointAt()
    }
    
    if(sumAscii > coolThreshold) {
        let result = `${symbol}${word}${symbol}`
        validWords.push(result)
    }
    
    validWord = wordPattern.exec(text)
}

console.log(`Cool threshold: ${coolThreshold}`)
console.log(`${countAllValidWords} emojis found in the text. The cool ones are:\n${validWords.join('\n')}`);

}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])