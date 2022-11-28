function pirates(input) {
let index1 = 0;
let targets = []
let cityExists = false;

while(input[index1] !== 'Sail') {
    let cityPosition;
let [city,population,gold] = input[index1].split('||')
for(let i = 0; i < targets.length; i++) {
    if(targets[i].city === city) {
        cityExists = true;
        cityPosition = i;
        break;
    } 
}

if(cityExists) {
    targets[cityPosition].population += Number(population)
    targets[cityPosition].gold += Number(gold)
}
else {
    targets.push({city:city,population:Number(population),gold:Number(gold)})
}

index1++
}


while(input[index1] !== 'End') {
    let [command,city,population,gold] = input[index1].split('=>')
    switch(command) {
        case 'Plunder':
        console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);
        for(let i = 0; i < targets.length; i++) {
            if(targets[i].city === city) {
                targets[i].population -= Number(population)
                targets[i].gold -= Number(gold)
            if(targets[i].population <= 0 || targets[i].gold <= 0) {
                targets.splice(i,1)
                console.log(`${city} has been wiped off the map!`);
            }
            }
        }
        break;

        case 'Prosper':
            for(let i = 0; i < targets.length; i++) {
                if(targets[i].city === city) {
                    if(Number(population) < 0) {
                        console.log('Gold added cannot be a negative number!');
                        break;
                    }
                    else {
                        targets[i].gold += Number(population)
            console.log(`${population} gold added to the city treasury. ${city} now has ${targets[i].gold} gold.`);
                    }
                }
            }
        break;
    }
    index1++
}

if(targets.length > 0) {
    console.log(`Ahoy, Captain! There are ${targets.length} wealthy settlements to go to:`);
    for(let i = 0; i < targets.length; i++) {
        console.log(`${targets[i].city} -> Population: ${targets[i].population} citizens, Gold: ${targets[i].gold} kg`);
    }
}

else {
    console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
}

}

pirates(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])

pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])