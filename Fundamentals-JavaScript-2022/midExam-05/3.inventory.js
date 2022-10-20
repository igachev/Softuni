function inventory(input) {
let collectedItems = input.shift().split(', ')
let index = 0;

while(input[index] !== 'Craft!') {
    let [command,item] = input[index].split(' - ')
   
    switch(command) {
        case 'Collect':
        collect(item)
        break;

        case 'Drop':
        drop(item)
        break;

        case 'Combine Items':
        combineItems(item)
        break;

        case 'Renew':
        renew(item)
        break;
    }
    index++;
}

console.log(collectedItems.join(', '));

function collect(item) {
    if(!collectedItems.includes(item)) {
        collectedItems.push(item)
    }
    return collectedItems
}

function drop(item) {
    for(let i = 0; i < collectedItems.length; i++) {
        if(collectedItems[i] === item) {
            collectedItems.splice(i,1)
            return collectedItems
        }
    }
}

function combineItems(item) {
    let [oldItem,newItem] = item.split(':')
    for(let i = 0; i < collectedItems.length; i++) {
        if(collectedItems[i] === oldItem) {
            collectedItems.splice(i+1,0,newItem)
            return collectedItems
        }
    }
}

function renew(item) {
    let itemValue = item;
    for(let i = 0; i < collectedItems.length; i++) {
        if(collectedItems[i] === item) {
            collectedItems.splice(i,1)
            collectedItems.push(itemValue)
            return collectedItems
        }
    }
}
}

inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'])

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])