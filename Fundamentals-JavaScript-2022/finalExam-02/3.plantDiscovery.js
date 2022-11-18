function plantDiscovery(input) {
let number = Number(input.shift())
let plants = {}
let index = 0;

for(let i = 0; i < number; i++) {
    let text = input.shift()
    let [plant,rarity] = text.split('<->')
    
        plants[plant] = [{rarity:rarity}]
    
    
    
}


while(input[index] !== 'Exhibition') {
    let text = input[index]
    let splitBySpace = text.split(' ')
    
    let command = splitBySpace[0]
    let plant = splitBySpace[1]
    let ratingOrRarity = splitBySpace[3]

    
    switch(command) {
        case 'Rate:':
        if(plants.hasOwnProperty(plant)) {
            plants[plant].push({rating:Number(ratingOrRarity)})
            }
            else {
            console.log('error');
            }
        break;
        
        case 'Update:':
            if(plants.hasOwnProperty(plant)) {
                plants[plant][0] = {rarity:ratingOrRarity};
               
            }
            else {
                console.log('error');
                }
        break;

        case 'Reset:':
            if(plants.hasOwnProperty(plant)) {
                for(let i = 0; i < plants[plant].length; i++) {
                    if(plants[plant][i].rating !== undefined) {
                        delete plants[plant][i];
                    }
                }
                
            } 
            else {
                console.log('error');
                }
        break;

    }
    index++
}

let entries = Object.entries(plants)
console.log('Plants for the exhibition:');
for(let [key,value] of entries) {
    
    let averageRating = 0;
    let counter = 0;
    let allValues = Object.values(value);
    for(let i = 1; i < allValues.length; i++) {
        if(allValues[i] !== undefined) {
            averageRating += allValues[i].rating
            counter++
        }
    }
    if(counter > 1) {
        averageRating = averageRating / counter
    }
    console.log(`- ${key}; Rarity: ${value[0].rarity}; Rating: ${averageRating.toFixed(2)}`);
}
}

plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])

plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])