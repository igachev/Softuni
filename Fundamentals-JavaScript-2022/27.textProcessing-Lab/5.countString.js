function countStringOccurrences(text,word) {
    let counter = 0;
    text = text.split(' ')
    let position = text.indexOf(word)

while(position !== -1) {
    counter++
position = text.indexOf(word,position+1)
}

console.log(counter);
}

countStringOccurrences('This is a word and it also is a sentence',
'is')