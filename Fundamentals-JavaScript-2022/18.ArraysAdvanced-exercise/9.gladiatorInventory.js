function gladiatorInventory(arrayOfCommands) {
    let inventory = arrayOfCommands.shift().split(' ')
    
    for(let i = 0; i < arrayOfCommands.length; i++) {
        let [command, ...equipment] = arrayOfCommands[i].split(' ')
       // console.log(command,equipment);
       switch(command) {
        case 'Buy':
        buy(equipment[0])
        break;
    
        case 'Trash':
        remove(equipment[0])
        break;
    
        case 'Repair':
        repair(equipment[0])
        break;
    
        case 'Upgrade':
        upgrade(equipment)
        break;
       }
    }
    
    function buy(item) {
        if(inventory.indexOf(item) === -1) {
            inventory.push(item)
        }
    }
    
    function remove(item) {
        for(let i = 0; i < inventory.length; i++) {
            if(inventory[i] === item) {
                inventory.splice(i,1)
                break;
            }
        }
    }
    
    function repair(item) {
        for(let i = 0; i < inventory.length; i++) {
            if(inventory[i] === item) {
                inventory.splice(i,1)
                inventory.push(item)
                break;
            }
        }
    }
    
    function upgrade(array) {
        let changeText = array[0].replace('-',':')
       
        let split = array[0].split('-')
        for(let i = 0; i < inventory.length; i++) {
            if(inventory.indexOf(split[0]) !== -1) {
                let index = inventory.indexOf(split[0])
                inventory.splice(index+1,0,changeText)
                break;
            }
        }
    }
    
    console.log(inventory.join(' '));
    }
    
    gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'])
    
    gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'])