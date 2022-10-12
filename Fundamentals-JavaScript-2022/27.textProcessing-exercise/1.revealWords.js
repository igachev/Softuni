function revealWords(words,text) {
    let splitWords = words.split(', ')
    let splitText = text.split(' ')
    
    for(let j = 0; j < splitText.length; j++) {
        let censoredWord = ''
    
        if(splitText[j].startsWith('*')) {
            censoredWord = splitText[j]
          let censoredWordLength = censoredWord.length
    
          for(let i = 0; i < splitWords.length; i++) {
    
            if(censoredWordLength === splitWords[i].length) {
                splitText[j] = splitWords[i]
            }
          }
    
        }
    }
    console.log(splitText.join(' '));
    }
    
    revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')