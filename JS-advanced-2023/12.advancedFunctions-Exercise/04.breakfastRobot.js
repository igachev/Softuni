function solution() {
    let ingridients = {
        protein:0,
        carbohydrate:0,
        flavour:0,
        fat:0
    }
    
    let recipesEnum = {
        //apple - made with 1 carbohydrate and 2 flavour
        apple:{carbohydrate:1,flavour:2},
        //lemonade - made with 10 carbohydrate and 20 flavour
        lemonade:{carbohydrate:10,flavour:20},
        //burger - made with 5 carbohydrate, 7 fat and 3 flavour
        burger:{carbohydrate:5,fat:7,flavour:3},
        //eggs - made with 5 protein, 1 fat and 1 flavour
        eggs:{protein:5,fat:1,flavour:1},
        //turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour
        turkey:{protein:10,carbohydrate:10,fat:10,flavour:10}
    }
    
    return function inputHandler(input) {
        let actionHanlder = cmd()
    let [command,microelement,quantity] = input.split(' ')
     return actionHanlder[command](microelement,quantity)
    }
    
    function cmd() {
        return {
            restock:(microelement,quantity) => {
                ingridients[microelement] = ingridients[microelement] + Number(quantity)
               return 'Success'
            },
            prepare:(recipe,quantity) => {
                let isDone = true;
                let str = ''
                let copyIngridients = JSON.parse(JSON.stringify(ingridients)) // this is how we break object reference
                for(let [key,defaultQuantity] of Object.entries(recipesEnum[recipe])) {
                    
                    let neededValue = Number(quantity) * defaultQuantity;
                    if(ingridients[key] < neededValue) {
                        isDone = false;
                        str = `Error: not enough ${key} in stock`
                        break;
                    }
                    copyIngridients[key] -= neededValue
                }
                if(!isDone) {
                    return str;
                }
                ingridients = copyIngridients
                return 'Success'
            },
            report:() => {
                return `protein=${ingridients.protein} carbohydrate=${ingridients.carbohydrate} fat=${ingridients.fat} flavour=${ingridients.flavour}`
            }
        }
    }
    }

let manager = solution (); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));