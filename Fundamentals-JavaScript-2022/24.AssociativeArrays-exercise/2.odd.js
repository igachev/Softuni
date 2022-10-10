function oddOccurrences(text) {
    let splitText = text.toLowerCase().split(' ')
    let words = []
    
    for(let i = 0; i < splitText.length; i++) {
        let word = splitText[i]
        let countOccurrence = 0;
    
        for(let j = 0; j < splitText.length; j++) {
           if(!words.includes(word)) {
            if(word === splitText[j]) {
                countOccurrence++;
            }
           }
        }
    
        if(countOccurrence % 2 !== 0) {
            words.push(word)
        }  
    }
    console.log(words.join(' '));
    
    }
    
    oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')