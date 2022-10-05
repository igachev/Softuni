function storage(input) {
    let items = new Map()
    
    for(let value of input) {
        let [product,quantity] = value.split(' ')
        quantity = Number(quantity)
        if(!items.has(product)) {
            items.set(product,quantity)
        }
        else {
            let currentQuantity = items.get(product)
            let updateQuantity = currentQuantity + quantity
            items.set(product,updateQuantity)
        }
    }
    
    let keys = Array.from(items.keys())
    for(let key of keys) {
        console.log(`${key} -> ${items.get(key)}`);
    }
    }
    
    storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])