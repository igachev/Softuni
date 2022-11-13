function imitationGame(input) {
let encryptedMessage = input.shift()
let index = 0;

while(input[index] !== 'Decode') {
    let instructions = input[index]
    let [command,numberOrLetter,value] = instructions.split('|')
    
    switch(command) {
        case 'Move':
            move(numberOrLetter)
        break;

        case 'ChangeAll':
            changeAll(numberOrLetter,value)
        break;

        case 'Insert':
            insert(numberOrLetter,value)
        break;
    }
    index++
}

console.log(`The decrypted message is: ${encryptedMessage}`);

function move(number) {
    number = Number(number)
    let remainingLetters = ''
    let firstLetters = encryptedMessage.substring(0,number)
    for(let i = number; i < encryptedMessage.length; i++) {
        remainingLetters += encryptedMessage[i]
    }
    let afterMove = remainingLetters + firstLetters
    encryptedMessage = encryptedMessage.replace(encryptedMessage,afterMove)
    return encryptedMessage
}

function changeAll(letter,replacement) {
    let letterPosition = encryptedMessage.indexOf(letter)
    while(letterPosition !== -1) {
        encryptedMessage = encryptedMessage.replace(letter,replacement)
        letterPosition = encryptedMessage.indexOf(letter,letterPosition+1)
    }
    
    return encryptedMessage
}

function insert(index,value) {
index = Number(index)
let letterByLetter = encryptedMessage.split('')
letterByLetter.splice(index,0,value)
let updatedWord = letterByLetter.join('')
encryptedMessage = encryptedMessage.replace(encryptedMessage,updatedWord)
    return encryptedMessage
}

}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ])

  imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ])