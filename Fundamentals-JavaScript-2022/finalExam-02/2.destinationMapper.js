function destinationMapper(str) {
let cityPattern = /([\=|\/])(?<city>[A-Z]{1}[A-Za-z]{2,})\1/g
let validLocations = []
let validLocation = cityPattern.exec(str)
let travelPoints = 0;

while(validLocation !== null) {
    let city = validLocation.groups.city;
    validLocations.push(city)
    validLocation = cityPattern.exec(str)
}

for(let location of validLocations) {
let wordLength = location.length;
travelPoints += wordLength
}

console.log(`Destinations: ${validLocations.join(', ')}`);
console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
destinationMapper("ThisIs some InvalidInput")