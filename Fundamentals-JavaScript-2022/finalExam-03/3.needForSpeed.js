function needForSpeed(input) {
let numberOfCars = Number(input.shift())
let index = 0;
let cars = []
for(let i = 0; i < numberOfCars; i++) {
    let [car,mileage,fuel] = input.shift().split('|')
    cars.push({car:car,mileage:Number(mileage),fuel:Number(fuel)})
}

while(input[index] !== 'Stop') {
    let carInfo = input[index]
    let [command,car,distanceOrFuel,fuel] = carInfo.split(' : ')
    switch(command) {
        case 'Drive':
        for(let i = 0; i < cars.length; i++) {
            if(cars[i].car === car) {
               if(cars[i].fuel < fuel) {
                console.log("Not enough fuel to make that ride");
               }
               else if(cars[i].fuel >= fuel) {
                cars[i].mileage += Number(distanceOrFuel)
                cars[i].fuel -= Number(fuel);
                console.log(`${car} driven for ${distanceOrFuel} kilometers. ${fuel} liters of fuel consumed.`);
               }
               if(cars[i].mileage >= 100000) {
                cars.splice(i,1)
                console.log(`Time to sell the ${car}!`);
               }
            }
        }
        break;

    case 'Refuel':
        for(let i = 0; i < cars.length; i++) {
            if(cars[i].car === car) {
                cars[i].fuel += Number(distanceOrFuel)
                let refilledFuel =  Number(distanceOrFuel)
                if(cars[i].fuel > 75) {
                    let overfill = cars[i].fuel - 75
                    let fill = Number(distanceOrFuel) - overfill
                    refilledFuel =  fill
                    cars[i].fuel = 75
                    
                }
                console.log(`${car} refueled with ${refilledFuel} liters`);
            }
        }
    break;

    case 'Revert':
        for(let i = 0; i < cars.length; i++) {
            if(cars[i].car === car) {
               cars[i].mileage -= Number(distanceOrFuel)
               
               if(cars[i].mileage < 10000) {
                cars[i].mileage = 10000
               }
               else {
                console.log(`${car} mileage decreased by ${distanceOrFuel} kilometers`);
               }
            }
        }
    break;
    }
    index++
}

for(let i = 0; i < cars.length; i++) {
    console.log(`${cars[i].car} -> Mileage: ${cars[i].mileage} kms, Fuel in the tank: ${cars[i].fuel} lt.`);
}
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'])

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])