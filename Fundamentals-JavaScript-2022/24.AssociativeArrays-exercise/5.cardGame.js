function cardGame(input) {

    let cardPower = {
        '2':2,
        '3':3,
        '4':4,
        '5':5,
        '6':6,
        '7':7,
        '8':8,
        '9':9,
        '10':10,
        'J':11,
        'Q':12,
        'K':13,
        'A':14
    }
    
    let cardType = {
        'S':4,
        'H':3,
        'D':2,
        'C':1
    }
    
        let uniqueCards = new Map()
    
    for(let text of input) {
        let splitByColon = text.split(': ')
        let playerName = splitByColon.shift()
        let deck = splitByColon[0]
        let splitDeckByComma = deck.split(', ')
    
       if(!uniqueCards.has(playerName)) {
        uniqueCards.set(playerName,new Set(splitDeckByComma))
       }
       else {
        for(let i = 0; i < splitDeckByComma.length; i++) {
            uniqueCards.get(playerName).add(splitDeckByComma[i])
        }  
       }
    
    }
    
    for(let cards of uniqueCards) {
    let player = cards[0]
    let setValues = cards[1];
    //console.log(setValues);
    let totalSum = 0;
    setValues.forEach((val) => {
        
    
        if(val.length < 3) {
            let splitEachChar = val.split('')
            let power = splitEachChar[0]
            let type = splitEachChar[1]
            totalSum += cardPower[power] * cardType[type]
        }
        else {
            let power = val[0] + val[1]
            let type = val[val.length-1]
            totalSum += cardPower[power] * cardType[type]
        }
       
    })
    console.log(player + ': ' + totalSum);
    }
    }
    
    cardGame([
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
        ])
    
    cardGame([
        'John: 2C, 4H, 9H, AS, QS',
        'Slav: 3H, 10S, JC, KD, 5S, 10S',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Slav: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'John: JD, JD, JD, JD'
        ])