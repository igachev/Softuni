function phoneBook(input) {
    let contacts = new Map()
    for(let i = 0; i < input.length; i++) {
        let [name , phone] = input[i].split(' ')
        contacts.set(name,phone)
    }
    
    let keys = Array.from(contacts.keys())
    for(let key of keys) {
        console.log(`${key} -> ${contacts.get(key)}`);
    }
    }
    
    phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])