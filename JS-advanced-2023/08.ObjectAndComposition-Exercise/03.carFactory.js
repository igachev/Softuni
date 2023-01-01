function carFactory(obj) {
    let car = {}
    let engineVolume = 0;

    
    car.model = obj.model
    let horsePower = obj.power;
    if(horsePower <= 90) {
        horsePower = 90
        engineVolume = 1800
    }
    else if(horsePower > 90 && horsePower <= 120) {
        horsePower = 120
        engineVolume = 2400
    }
    
    else if(horsePower >= 200) {
        horsePower = 200
        engineVolume = 3500
    }

    car.engine = {
        power:horsePower,
        volume:engineVolume
    }

   car.carriage = {
    type:obj.carriage,
    color:obj.color
   }

   let wheelSize = obj.wheelsize
   let wheelArr = []
   if(wheelSize % 2 === 0) {
    wheelSize--
   }
   for(let i = 0; i < 4; i++) {
    wheelArr.push(wheelSize)
   }

   car.wheels = wheelArr

return car
}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }))

console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }))