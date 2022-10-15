function race(input) {
let index = 0;
let names = input.shift().split(', ')
let fullName = ''
let personTotalDistance = 0;
let listOfRunners = {}

while(input[index] !== 'end of race') {
let text = input[index]
let personNamePattern = /(?<name>[A-Za-z]+)/g
let personDistancePattern = /(?<digits>[\d])/g
let validName = personNamePattern.exec(text)
let distance = personDistancePattern.exec(text)

while(validName != null) {
    let personName = validName.groups['name']
    fullName += personName
    validName = personNamePattern.exec(text)
}

while(distance != null) {
    let personDistance = distance.groups['digits']
    personTotalDistance += Number(personDistance)
    distance = personDistancePattern.exec(text)
}

if(names.includes(fullName)) {
if(!listOfRunners.hasOwnProperty(fullName)) {
    listOfRunners[fullName] = personTotalDistance
}
else {
    let currentKm = listOfRunners[fullName]
    let updateDistance = currentKm + personTotalDistance
    listOfRunners[fullName] = updateDistance
}
}

personTotalDistance = 0;
fullName = ''
    index++
}

let entries = Object.entries(listOfRunners)
let sortDescending = entries.sort((a,b) => b[1] - a[1])
for(let i = 0; i < sortDescending.length; i++) {
    
    if(i === 0) {
       let rank = `1st place: ${sortDescending[i][0]}`
        console.log(rank);
    }

    else if(i === 1) {
        let rank = `2nd place: ${sortDescending[i][0]}`
        console.log(rank);
    }
    
    else if(i === 2) {
        let rank = `3rd place: ${sortDescending[i][0]}`
        console.log(rank);
    }

    else {
        break;
    }
}
}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'])

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race'])