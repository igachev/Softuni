function wordOccurence(input) {
    let wordContainer = new Map()
    
    for(let i = 0; i < input.length; i++) {
        let word = input[i]
    
    if(!wordContainer.has(word)) {
        let wordCounter = 0;
        wordCounter++
        wordContainer.set(word,wordCounter)
    }
    else {
        let currentCount = wordContainer.get(word)
        currentCount++
        wordContainer.set(word,currentCount)
    }
    }
    
    let entries = Array.from(wordContainer.entries())
    let sortedEntries = entries.sort((a,b) => b[1] - a[1])
    
    for(let [key,value] of sortedEntries) {
        console.log(`${key} -> ${value} times`);
    }
    
    }
    
    wordOccurence(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])