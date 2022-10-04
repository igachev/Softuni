function storeProvision(currentStock,orderedProducts) {
    let store = {}
    let product = ''
    let quantity = 0;

    for(let i = 0; i < currentStock.length; i++) {
        if(i % 2 === 0) {
             product = currentStock[i]
        }
        else {
             quantity = parseInt(currentStock[i])
        }
        store[product] = quantity
    }

    for(let j = 0; j < orderedProducts.length; j++) {
        if(j % 2 === 0) {
            product = orderedProducts[j]
        }
        else {
            quantity = parseInt(orderedProducts[j])
            if(store.hasOwnProperty(product)) {
                store[product] += quantity
            }
            else {
                store[product] = quantity
            }
        }  
    }

   let keys = Object.keys(store)
   for(let key of keys) {
    console.log(`${key} -> ${store[key]}`);
   }
   
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])