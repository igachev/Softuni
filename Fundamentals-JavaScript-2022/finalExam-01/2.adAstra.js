function adAstra(input) {
let dayCalories = 2000;
let foodInfo = input.shift()
let pattern = /([#|])(?<name>[A-Za-z\s]+)\1(?<year>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g
let validFood = pattern.exec(foodInfo)
let validFoods = []
let totalCalories = 0;

while(validFood !== null) {
    let foodName = validFood.groups.name
    let year = validFood.groups.year
    let calories = validFood.groups.calories
    totalCalories += Number(calories)
    let result = `Item: ${foodName}, Best before: ${year}, Nutrition: ${calories}`
    validFoods.push(result)
    validFood = pattern.exec(foodInfo)
}
console.log(`You have food to last you for: ${Math.floor(totalCalories/dayCalories)} days!`);
console.log(validFoods.join('\n'));
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ])

adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])