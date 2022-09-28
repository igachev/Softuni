function characters(char1,char2) {
//console.log(char1.charCodeAt(0));
let char1Code = char1.charCodeAt(0);
let char2Code = char2.charCodeAt(0);
let result = ''

if(char1Code > char2Code) {
    let temp = char1Code;
    char1Code = char2Code;
    char2Code = temp;
}

for(let start = char1Code+1; start < char2Code; start++) {
   result += String.fromCharCode(start) + ' ';
}

console.log(result);
}

characters('a','d')
characters('#',':')
characters('C','#')