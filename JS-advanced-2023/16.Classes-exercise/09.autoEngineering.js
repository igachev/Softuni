function autoEngineering(input) {
let register = {}

for(let text of input) {
    let [carBrand,carModel,producedCars] = text.split(' | ')
    producedCars = Number(producedCars)
   
    if(!register.hasOwnProperty(carBrand)) {
        register[carBrand] = []
       register[carBrand][carModel] = producedCars
    }

    else {
         if(register[carBrand].hasOwnProperty(carModel)) {
            let currentCars = register[carBrand][carModel]
            let updateCars = currentCars + producedCars
            register[carBrand][carModel] = updateCars
         }
         else {
            register[carBrand][carModel] = producedCars
         }
    }
}

let entries = Object.entries(register)
for(let [key,values] of entries) {
    console.log(key);
    
   let entriesOfValues = Object.entries(values)
   for(let [k,v] of entriesOfValues) {
    console.log(`###${k} -> ${v}`);
   }
    
}
}

autoEngineering(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])