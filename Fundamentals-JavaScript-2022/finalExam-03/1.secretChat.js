function secretChat(input) {
let concealedMessage = input.shift()
let index = 0;

while(input[index] !== 'Reveal') {
    let text = input[index]
    let [command,indexOrString,replacement] = text.split(':|:')

    switch(command) {
        case 'InsertSpace':
        insertSpace(indexOrString)
        break;

        case 'Reverse':
            reverse(indexOrString)
        break;
        
        case 'ChangeAll':
            changeAll(indexOrString,replacement)
        break;
    }
    index++
}

console.log(`You have a new text message: ${concealedMessage}`);

function insertSpace(index) {
    index = Number(index)
    concealedMessage = concealedMessage.slice(0,index) + ' ' + concealedMessage.slice(index)
    console.log(concealedMessage)
}

function reverse(str) {
    if(concealedMessage.includes(str)) {
        let wordPosition = concealedMessage.indexOf(str)
        
        let reversedWord = ''
        for(let i = str.length-1; i >= 0; i--) {
            reversedWord += str[i]
        }
       concealedMessage = concealedMessage.slice(0,wordPosition) + concealedMessage.slice(wordPosition+str.length)
        concealedMessage += reversedWord
        console.log(concealedMessage)
    }
    else {
        console.log('error');
    }
    
}

function changeAll(str,replacement) {
let wordPosition = concealedMessage.indexOf(str)
while(wordPosition !== -1) {
    concealedMessage = concealedMessage.replace(str,replacement)
    wordPosition = concealedMessage.indexOf(str,wordPosition+1)
}
console.log(concealedMessage)
}

}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])