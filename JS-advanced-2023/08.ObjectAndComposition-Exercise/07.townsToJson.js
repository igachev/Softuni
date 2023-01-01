function townsToJson(input) {
let tableHeadings = input.shift().split(/\|/g)
let town = tableHeadings[1]
let latitude = tableHeadings[2]
let longitude = tableHeadings[3]
let towns = []

for(let i = 0; i < input.length; i++) {
    
    let [emptySpace,townName,latPosition,longPosition] = input[i].split(/\|/g)
    let lat = Number(latPosition).toFixed(2)
    let long = Number(longPosition).toFixed(2)
    towns.push({Town:townName.trim(),Latitude:Number(lat),Longitude:Number(long)})
}
console.log(JSON.stringify(towns));
}

townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])

townsToJson(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |'])