function fruit(typeOfFruit,weight,pricePerKilogram) {
let money = (weight / 1000) * pricePerKilogram
console.log(`I need $${money.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${typeOfFruit}.`);
}

fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)