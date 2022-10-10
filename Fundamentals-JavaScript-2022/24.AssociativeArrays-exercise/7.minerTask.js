function minerTask(input) {
    let resources = new Map()
    
    for(let i = 0; i < input.length; i++) {
        let material = input[i]
        let quantity = Number(input[i+1])
    
        if(i % 2 === 0) {
            if(!resources.has(material)) {
                resources.set(material,quantity)
            }
            else {
                let currentQuantity = resources.get(material)
                currentQuantity += quantity
                resources.set(material,currentQuantity)
            }
        }
    
    }
    
    let keys = Array.from(resources.keys())
    
    for(let resource of keys) {
        console.log(resource + ' -> ' + resources.get(resource));
    }
    }
    
    minerTask([
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
        ])