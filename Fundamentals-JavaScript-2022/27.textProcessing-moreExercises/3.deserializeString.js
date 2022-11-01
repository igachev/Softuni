function deserialize(input) {
let index = 0;
let wordArray = []

while(input[index] !== 'end') {
    let text = input[index];
    text = text.split(':')
    let letter = text[0];
    let positions = text[1].split('/')
    
    for(let i = 0; i < positions.length; i++) {
       wordArray[positions[i]] = letter
    }
    index++
}
console.log(wordArray.join(''));

}

deserialize(['a:0/2/4/6',
'b:1/3/5',
'end'])

deserialize(['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end'])