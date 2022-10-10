function wordsTracker(input) {
    let searchWords = input.shift()
    let splitWords = searchWords.split(' ')
    let wordRecords = []
    let countWords = 0
    
    for(let i = 0; i < splitWords.length; i++) {
        let word = splitWords[i]
        for(let j = 0; j < input.length; j++) {
            
            if(splitWords[i] === input[j]) {
                countWords++    
            }

        }
        wordRecords.push({word,countWords})
        countWords = 0;
    }
    
    let sortDescending = wordRecords.sort((a,b) => b.countWords - a.countWords)
   
    for(let j = 0; j < sortDescending.length; j++) {
        console.log(sortDescending[j].word + ' - ' + sortDescending[j].countWords);
    }
    
    }

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])

wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])