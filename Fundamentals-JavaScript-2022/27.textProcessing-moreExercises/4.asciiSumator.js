function asciiSumator(input) {
let startOfRange = input.shift().charCodeAt()
let endOfRange = input.shift().charCodeAt()
let text = input.shift()
let totalSum = 0;

for(let char of text) {
    if(char.charCodeAt() > startOfRange && char.charCodeAt() < endOfRange) {
        totalSum += char.charCodeAt()
    }
   
    else if(char.charCodeAt() < startOfRange && char.charCodeAt() > endOfRange) {
        totalSum += char.charCodeAt()
    }
}

console.log(totalSum);
}

asciiSumator(['.',
'@',
'dsg12gr5653feee5'])

asciiSumator(['a',
'1',
'jfe392$#@j24ui9ne#@$'])

asciiSumator(['?',
'E',
'@ABCEF'])