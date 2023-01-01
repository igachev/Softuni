function townPopulation(input) {
    let towns = {}
for(let text of input) {
    let [town,population] = text.split(' <-> ')
    if(!towns.hasOwnProperty(town)) {
        towns[town] = Number(population)
    }
    else {
        currentPopulation = towns[town]
        towns[town] = currentPopulation + Number(population)
    }
}
let keys = Object.keys(towns)
for(let key of keys) {
    console.log(key + ' : ' + towns[key]);
}
}

townPopulation(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000'])

townPopulation(['Istanbul <-> 100000',

'Honk Kong <-> 2100004',

'Jerusalem <-> 2352344',

'Mexico City <-> 23401925',

'Istanbul <-> 1000'])