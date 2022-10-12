function stringSubstring(word,text) {
    word = word.toLowerCase()
    text = text.toLowerCase().split(' ')
    
    for(let wordOf of text) {
        if(wordOf === word) {
            console.log(word);
            return;
        }
    }
    
        console.log(`${word} not found!`);
    }
    
    stringSubstring('javascript',
    'JavaScript is the best programming language')
    stringSubstring('python',
    'JavaScript is the best programming language')