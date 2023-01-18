function playingCards(face,suit) {
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

if(!validFaces.hasOwnProperty(face) || typeof face === 'number') {
    throw new Error('Error')
}

return {
   faceResult:validFaces[face],
   suitResult:validSuits[suit],
   toString() {
    return this.faceResult + this.suitResult
   }
}
}

console.log(playingCards('1', 'S').toString())