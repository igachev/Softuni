function valueOfString(input) {
let totalSum = 0;
let requirement = input.pop()
let text = input.pop()

if(requirement === 'LOWERCASE') {
    for(let i = 0; i < text.length; i++) {
       if(text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
        totalSum += text.charCodeAt(i);
       }
    }
}

else if(requirement === 'UPPERCASE') {
    for(let i = 0; i < text.length; i++) {
       if(text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
        totalSum += text.charCodeAt(i);
       }
    }
}

console.log(`The total sum is: ${totalSum}`);
}

valueOfString(['HelloFromMyAwesomePROGRAM',
'LOWERCASE'])

valueOfString(['AC/DC',
'UPPERCASE'])