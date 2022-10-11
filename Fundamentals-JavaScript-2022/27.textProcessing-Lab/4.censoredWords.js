function censoredWords(text,word) {
    let censored = text.replace(word,repeat(word))
    while(censored.includes(word)) {
        censored = censored.replace(word,repeat(word))
    }
    console.log(censored);
    
    function repeat(censoredWord) {
        let stars = ''
        let lengthOfWord = censoredWord.length;
        for(let j = 0; j < lengthOfWord; j++) {
            stars += '*'
        }
        return stars;
    }
    }
    
    censoredWords('A small sentence with some words', 'small')