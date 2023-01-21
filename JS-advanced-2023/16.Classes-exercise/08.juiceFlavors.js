function juiceFlavors(input) {
    let juiceStorage = {}
    let juiceBottles = {}

for(let text of input) {

    let [juiceName,quantity] = text.split(' => ')
    quantity = Number(quantity)

    if(!juiceStorage.hasOwnProperty(juiceName)) {
        juiceStorage[juiceName] = quantity
    }
    else {
        let currentJuiceQuantity = juiceStorage[juiceName]
        let updateQuantity = currentJuiceQuantity + quantity
        juiceStorage[juiceName] = updateQuantity
    }

    if(juiceStorage[juiceName] / 1000 >= 1) {
        let countBottles = juiceStorage[juiceName] / 1000
        juiceBottles[juiceName] = Math.floor(countBottles).toFixed(0)
    }

}

let entries = Object.entries(juiceBottles)
for(let [key,value] of entries) {
    console.log(`${key} => ${value}`);
}
}

juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])

juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])