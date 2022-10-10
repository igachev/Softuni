function partyTime(input) {
    let guestList = []
    let index = 0;
    let partyIndexPosition = input.indexOf('PARTY')
    let arrivedGuests = input.slice(partyIndexPosition+1,input.length)
    
    while(input[index] !== 'PARTY') {
        let guest = input[index]
        guestList.push(guest)
        index++
    }
    
        for(let j = 0; j < arrivedGuests.length; j++) {
            if(guestList.includes(arrivedGuests[j])) {
                guestList.splice(guestList.indexOf(arrivedGuests[j]),1)
              
            }
        }
    
    
    let countGuests = guestList.length
    console.log(countGuests);
    
    for(let k = 0; k < guestList.length; k++) {
        if(!isNaN(guestList[k][0])) {
            console.log( guestList[k]);
        }
    }
    
    for(let m = 0; m < guestList.length; m++) {
        if(isNaN(guestList[m][0])) {
            console.log( guestList[m]);
        }
    }
    }
    
    partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
    ])
    
    partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
    ])