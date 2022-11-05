function santaSecretHelper(input) {
let number = input.shift()
number = parseInt(number)
let decodedWords = []
let index = 0;
let validMessagePattern = /@(?<name>[A-Za-z]+)[^\@\-\!\:\>]+\!(?<behavior>[GN])\!/g
let goodChildren = []

while(input[index] !== 'end') {
        let text = input[index]
        let letterByLetter = text.split('')
        let updateLetters = ''
    
        for(let i = 0; i < letterByLetter.length; i++) {
            let newLetter = String.fromCharCode(letterByLetter[i].charCodeAt() - number)
            updateLetters += newLetter
        }
    
        decodedWords.push(updateLetters)
    
    index++
}

for(let x = 0; x < decodedWords.length; x++) {
    let message = decodedWords[x]
    let validMessage = validMessagePattern.exec(message)
    while(validMessage != null) {
        let name = validMessage.groups.name;
        let behavior = validMessage.groups.behavior
        if(behavior === 'G') {
            goodChildren.push(name)
        }
        validMessage = validMessagePattern.exec(message)
    }
}

console.log(goodChildren.join('\n'));
}

santaSecretHelper(['3',
'CNdwhamigyenumje$J$',
'CEreelh-nmguuejnW$J$',
'CVwdq&gnmjkvng$Q$',
'end'])

santaSecretHelper(['3',
"N}eideidmk$'(mnyenmCNlpamnin$J$",
'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
'ppqmkkkmnolmnnCEhq/vkievk$Q$',
'yyegiivoguCYdohqwlqh/kguimhk$J$',
'end'])