function flightSchedule(input) {
let allFlights = input.shift()
let changedFlights = input.shift()
let checkStatus = input.shift()
let flights = {}

for(let i = 0; i < allFlights.length; i++) {
    let splitBySpace = allFlights[i].split(' ')
    let flightNumber = splitBySpace.shift()
    flights[flightNumber] = {city:splitBySpace.join(' ')}
}

for(let j = 0; j < changedFlights.length; j++) {
    let [number,status] = changedFlights[j].split(' ')
  
    if(flights.hasOwnProperty(number)) {
        flights[number]['status'] = status
    }
}

let keys = Object.keys(flights);

for(let key of keys) {
    if(checkStatus[0] === 'Ready to fly' && flights[key].status === undefined) {
        flights[key].status = 'Ready to fly'
        console.log(`{ Destination: '${flights[key].city}', Status: '${flights[key].status}' }`)
    }
    else {
        if(flights[key].status === checkStatus[0]) {
            console.log(`{ Destination: '${flights[key].city}', Status: '${flights[key].status}' }`);
        }
    }
}
}

flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
])

flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
'WN498 Las Vegas',
'WN3145 Ohio',
'WN612 Alabama',
'WN4010 New York',
'WN1173 California',
'DL2120 Texas',
'KL5744 Illinois',
'WN678 Pennsylvania'],
['DL2120 Cancelled',
'WN612 Cancelled',
'WN1173 Cancelled',
'SK330 Cancelled'],
['Ready to fly']
])