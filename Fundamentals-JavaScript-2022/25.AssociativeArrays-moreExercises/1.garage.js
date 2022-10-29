function garage(input) {
    let garages = new Map()
    let replaceValue = ' - '

for(let value of input) {
    let [garageNumber,carInfo] = value.split(' - ')
    carInfo = carInfo.split(': ').join(replaceValue)
    
    if(!garages.has(garageNumber)) {
        garages.set(garageNumber,new Set().add(carInfo))
    }
    else {
      let currentInfo = garages.get(garageNumber)
      let updateInfo = currentInfo.add(carInfo)
      garages.set(garageNumber,updateInfo)
    }
}

let keys = Array.from(garages.keys())
for(let key of keys) {
    console.log(`Garage № ${key}`);
    let carInformation = garages.get(key)
    for(let info of carInformation) {
        console.log(`--- ${info}`);
    }
    
}
}

garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])