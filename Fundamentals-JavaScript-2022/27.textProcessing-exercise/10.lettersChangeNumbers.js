function lettersChangeNumbers(str) {
    let alphabet = {
        'a':1,
        'A':1,
        'b':2,
        'B':2,
        'c':3,
        'C':3,
        'd':4,
        'D':4,
        'e':5,
        'E':5,
        'f':6,
        'F':6,
        'g':7,
        'G':7,
        'h':8,
        'H':8,
        'i':9,
        'I':9,
        'j':10,
        'J':10,
        'k':11,
        'K':11,
        'l':12,
        'L':12,
        'm':13,
        'M':13,
        'n':14,
        'N':14,
        'o':15,
        'O':15,
        'p':16,
        'P':16,
        'q':17,
        'Q':17,
        'r':18,
        'R':18,
        's':19,
        'S':19,
        't':20,
        'T':20,
        'u':21,
        'U':21,
        'v':22,
        'V':22,
        'w':23,
        'W':23,
        'x':24,
        'X':24,
        'y':25,
        'Y':25,
        'z':26,
        'Z':26
    }
    let splitBySpace = str.split(' ').filter((letter) => letter.length > 1)
    
    let totalSum = 0;
    let firstOperation = 0;
    let secondOperation = 0;
    let arr = []
    
    for(let i = 0; i < splitBySpace.length; i++) {
        let splitByCharacter = splitBySpace[i].split('')
    
        let firstLetter = splitByCharacter.shift()
        let lastLetter = splitByCharacter.pop()
        let number = Number([...splitByCharacter].join(''))
    
        if(firstLetter.toUpperCase() === firstLetter) {
            firstOperation = number / alphabet[firstLetter]
           
        }
        else if(firstLetter.toLowerCase() === firstLetter) {
            firstOperation = number * alphabet[firstLetter]
            
        }
    
        if(lastLetter.toUpperCase() === lastLetter) {
            secondOperation = (firstOperation - alphabet[lastLetter])
            
        }
        else if(lastLetter.toLowerCase() === lastLetter) {
            secondOperation = firstOperation + alphabet[lastLetter]
            
        }
        
        arr.push(secondOperation)
    }

    for(let num of arr) {
        totalSum += num;
    }

    console.log(`${totalSum.toFixed(2)}`);
    }
lettersChangeNumbers('A12b s17G')
lettersChangeNumbers('P34562Z q2576f    H456z')
lettersChangeNumbers('a1A')