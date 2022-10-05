function addressBook(input) {
    let book = new Map()
    for(let value of input) {
        let [name , address] = value.split(':')
        if(!book.has(name)) {
            book.set(name,address)
        }
        else {
            book.set(name,address)
        }
    }
    
    let keys = Array.from(book.keys())
    let sortedKeys = keys.sort((a,b) => a.localeCompare(b))
    for(let key of sortedKeys) {
        console.log(`${key} -> ${book.get(key)}`);
    }
    }
    
    addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])