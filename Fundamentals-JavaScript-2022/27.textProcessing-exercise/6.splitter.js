function splitter(str) {
    let arrOfWords = []
    let word = ''
for(let i = 0; i < str.length; i++) {
    
    if(str[i].toUpperCase() === str[i]) {
        word += str[i]
    }
    
   else if(str[i].toLowerCase() === str[i]) {
        word += str[i]
    }
   
    if(str[i+1] != null) {
        if(str[i+1].toUpperCase() === str[i+1]) {
            arrOfWords.push(word)
            word = ''   
        }
    }

    else {
        for(let j = str.length-1; j >= 0; j--) {
            if(str[j].toUpperCase() === str[j]) {
                let index = j;
                let lastWord = str.substring(index)
                arrOfWords.push(lastWord)
                break;
            }
        }
    }
    
}
console.log(arrOfWords.join(', '));
}

splitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
splitter('HoldTheDoor')
/* Another solution
function splitter(input) {
let arr = input.split(/(?=[A-Z])/g)
console.log(arr.join(', '));
}
splitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
splitter('HoldTheDoor') */