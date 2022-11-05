function rageQuit(input) {
let text = input[0].split(/[0-9]+/).filter((x) => x != '');
let digits = input[0].split(/[^0-9]+/).filter((x) => x != '')
let result = ''

for(let i = 0; i < text.length; i++) {

result += text[i].toUpperCase().repeat(digits[i])
    
}

let uppercaseText = result;
let uniqueChars = new Set(uppercaseText)
console.log(`Unique symbols used: ${uniqueChars.size}`);
console.log(uppercaseText);
}

rageQuit(['aSd2&5s@1'])
rageQuit(['a3'])

