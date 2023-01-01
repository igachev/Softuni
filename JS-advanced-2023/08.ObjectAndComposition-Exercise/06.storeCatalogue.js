function storeCatalogue(input) {
let products = {}
for(let item of input) {
    let [product,price] = item.split(' : ')
    price = Number(price)
    if(!products.hasOwnProperty(product[0])) {
        products[product[0]] = [{product:product,price:price}]
    }
    else {
        products[product[0]].push({product:product,price:price})
    }
}
let entries = Object.entries(products)
let sortByName = entries.sort((a,b) => a[0].localeCompare(b[0]))
for(let [key,values] of sortByName) {
    console.log(key);
    let valueOfProducts = values.sort((a,b) => a.product.localeCompare(b.product))
   for(let i = 0; i < valueOfProducts.length; i++) {
    console.log(`  ${valueOfProducts[i].product}: ${valueOfProducts[i].price}`);
   }
}
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])

storeCatalogue(['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10'])