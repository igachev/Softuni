function piccolo(input) {
let parking = {}
for(let item of input) {
    let [direction , number] = item.split(', ')
    //console.log(direction , number);
    if(direction === 'IN') {
        parking[number] = number;
    }
    else if(direction === 'OUT') {
        delete parking[number]
    }
}

let entries = Object.entries(parking)

if(entries.length === 0) {
    console.log('Parking Lot is Empty');
    return;
}

let sortedEntries = entries.sort((a , b) => a[1].localeCompare(b[1]))

for(let [key , value] of sortedEntries) {
    console.log(value);
}
}

piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU'])

piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA'])