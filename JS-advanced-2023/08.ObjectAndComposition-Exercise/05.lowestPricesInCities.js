function lowestPricesInCities(input) {
    let cities = {}
for(let text of input) {
    let [town,product,price] = text.split(' | ')
    price = Number(price)

    if(!cities.hasOwnProperty(product)) {
        cities[product] = {price:price,town:town}
    }
    else {
        let currentPrice = cities[product].price
        if(price < currentPrice) {
            cities[product].price = price
            cities[product].town = town;
        }
    }
}
let entries = Object.entries(cities)
for(let [key,value] of entries) {
    console.log(`${key} -> ${value.price} (${value.town})`);
}
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])