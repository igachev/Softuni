function hardWords(letter) {
    let unknownWords = letter.pop()
    let splitToWords = letter[0].split(' ')
    
    for(let i = 0; i < splitToWords.length; i++) {
        if(splitToWords[i].includes('_')) {
    
            let underscoreLength = splitToWords[i].length;
            let symbol;
            let symbolValue = ''
            
        if(splitToWords[i].includes('.')) {
            symbol =  splitToWords[i].indexOf('.')
            symbolValue = splitToWords[i].charAt(symbol)
            underscoreLength--
            }
        
        else if(splitToWords[i].includes(',')) {
            symbol = splitToWords[i].indexOf(',')
            symbolValue = splitToWords[i].charAt(symbol)
            underscoreLength--
            }
     
            for(let j = 0; j < unknownWords.length; j++) {
             
                if(unknownWords[j].length === underscoreLength) {
                    let word = unknownWords[j] + symbolValue;
                    splitToWords[i] = word;
                }
            }
            
        }
    }
    
    console.log(splitToWords.join(' '));
    }
    
    hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])