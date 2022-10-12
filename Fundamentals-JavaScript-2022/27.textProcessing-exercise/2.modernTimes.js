function modernTimes(str) {
    let splitBySpace = str.split(' ')
    for(let i = 0; i < splitBySpace.length; i++) {
        if(splitBySpace[i].startsWith('#') && !checkForNumber(splitBySpace[i]) &&
        splitBySpace[i].length > 1) {
            console.log(splitBySpace[i].substring(1));
        }
    }
    
    function checkForNumber(word) {
    let characters = word.split('')
    for(let j = 0; j < characters.length; j++) {
        if(!isNaN(characters[j])) {
            return true;
        }
    }
    return false;
    }
    
    }
    
    modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')