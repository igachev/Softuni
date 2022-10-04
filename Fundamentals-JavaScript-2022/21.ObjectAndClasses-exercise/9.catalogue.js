function catalogue(input) {
    let products = []
    let printOnce = true;
    let previousProductFirstLetter = ''

for(let i = 0; i < input.length; i++) {
    let [productName, productPrice] = input[i].split(' : ')
    productPrice = Number(productPrice)
    products.push({productName:productName,productPrice:productPrice});
}
let sortAlphabetically = products.sort((a,b) => a.productName.localeCompare(b.productName))
let keys = Object.keys(sortAlphabetically)

for(let key of keys) {
    let firstLetter = sortAlphabetically[key].productName[0]

    if(previousProductFirstLetter !== firstLetter) {
        printOnce = true;
    }

    if(printOnce) {
        console.log(firstLetter);
        printOnce = false;
        previousProductFirstLetter = firstLetter
    }
    console.log(`  ${sortAlphabetically[key].productName}: ${sortAlphabetically[key].productPrice}`);
}
}

catalogue([

    'Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10'

])

catalogue([

    'Omlet : 5.4',
    
    'Shirt : 15',
    
    'Cake : 59'
    
    ])