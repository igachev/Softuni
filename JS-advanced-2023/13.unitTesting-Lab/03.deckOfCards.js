function deckOfCards(cards) {
    let arr = []
    let card = ''

function createCard() {
    let validFaces = {
        '2':'2',
        '3':'3',
        '4':'4',
        '5':'5',
        '6':'6',
        '7':'7',
        '8':'8',
        '9':'9',
        '10':'10',
        'J':'J',
        'Q':'Q',
        'K':'K',
        'A':'A'
    }
    
    let validSuits = {
        'S':'\u2660',
        'H':'\u2665',
        'D':'\u2666',
        'C':'\u2663'
    }

    for(let text of cards) {
        let textArr = text.split('')
        let suit = textArr.pop()
        let face = textArr.join('')
        
if(validFaces[face] !== undefined && validSuits[suit] !== undefined) {
     card = validFaces[face] + validSuits[suit]
    arr.push(card)
        }
    else {
return console.log(`Invalid card: ${face}${suit}`)
    }
    }
    
    console.log(arr.join(' '));
}

createCard()

}

deckOfCards(['AS', '10D', 'KH', '2C'])
deckOfCards(['5S', '3D', 'QD', '1C'])