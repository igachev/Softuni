function calorieObject(input) {
let calorieObj = {}
let name = ''

for(let i = 0; i < input.length; i++) {
    if(i % 2 === 0) {
        name = input[i]
    }
    else if(i % 2 !== 0) {
        let calories = Number(input[i])
        calorieObj[name] = calories
        name = ''
    }
}
console.log(calorieObj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])