function lowerOrUpper(char) {
let charUnicode = char.charCodeAt(0)
if(charUnicode >= 65 && charUnicode <= 90) {
    console.log('upper-case');
}

else if(charUnicode >= 97 && charUnicode <= 122) {
    console.log('lower-case');
}
}

lowerOrUpper('L')
lowerOrUpper('f')