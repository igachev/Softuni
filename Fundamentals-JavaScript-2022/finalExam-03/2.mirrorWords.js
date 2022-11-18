function mirrorWords(input) {
let wordPattern = /([@#])(?<firstword>[A-Za-z]{3,})(\1{2})(?<secondword>[A-Za-z]{3,})\1/g
let validWords = []
let validWord = wordPattern.exec(input[0])
let countPairs = 0;

while(validWord !== null) {
    countPairs++
    let firstWord = validWord.groups.firstword
    let secondWord = validWord.groups.secondword
    if(firstWord === reverse(secondWord)) {
        validWords.push(`${firstWord} <=> ${secondWord}`)
    }
    validWord = wordPattern.exec(input[0])
    
}

if(countPairs !== 0) {
    console.log(`${countPairs} word pairs found!`);
}
else {
    console.log('No word pairs found!');
}
if(validWords.length !== 0) {
    console.log('The mirror words are:');
    console.log(validWords.join(', '));
}
else {
    console.log('No mirror words!');
}

function reverse(str) {
    let reverseWord = ''
    for(let x = str.length-1; x >= 0; x--) {
        reverseWord += str[x]
    }
    return reverseWord
}

}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ])

    mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])
    mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])