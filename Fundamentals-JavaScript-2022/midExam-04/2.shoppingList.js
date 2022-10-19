function shoppingList(input) {
let groceries = input.shift().split('!')
let index = 0;

while(input[index] !== 'Go Shopping!') {
    let text = input[index]
    let [command, product1, product2] = text.split(' ')

    switch(command) {
        case 'Urgent':
        urgent(product1)
        break;

        case 'Unnecessary':
        unnecessary(product1)
        break;

        case 'Correct':
        correct(product1,product2)
        break;

        case 'Rearrange':
        rearrange(product1)
        break;
    }

    index++
}
console.log(groceries.join(', '));

function urgent(item) {
    if(!groceries.includes(item)) {
        groceries.unshift(item)
        return groceries
    }
}

function unnecessary(item) {
    for(let i = 0; i < groceries.length; i++) {
        if(item === groceries[i]) {
            groceries.splice(i,1)
            return groceries
        }
    }
}

function correct(oldItem,newItem) {
    for(let i = 0; i < groceries.length; i++) {
        if(oldItem === groceries[i]) {
            groceries[i] = newItem
            return groceries
        }
    }
}

function rearrange(item) {
    for(let i = 0; i < groceries.length; i++) {
        if(item === groceries[i]) {
            groceries.splice(i,1)
            groceries.push(item)
            return groceries
        }
    }
}

}

shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])

shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])