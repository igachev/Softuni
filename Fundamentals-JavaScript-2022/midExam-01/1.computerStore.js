function computerStore(input) {
let taxes = 0;
let priceWithoutTaxes = 0;
let totalPrice = 0;
let index = 0;
let discount = 0;

while(input[index] !== 'special' && input[index] !== 'regular') {
let item = Number(input[index])

if(item < 0) {
    console.log('Invalid price!');
   index++
}

else {
let itemTax = (20 / 100) * item;
taxes += itemTax;
priceWithoutTaxes += item;
index++;
}

}

totalPrice = taxes + priceWithoutTaxes;
let typeOfClient = input[index]

if(typeOfClient === 'special') {
    discount = (10 / 100) * totalPrice;
}

totalPrice -= discount;
if(totalPrice === 0) {
    console.log('Invalid order!');
}
else {
console.log("Congratulations you've just bought a new computer!");
console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
console.log(`Taxes: ${taxes.toFixed(2)}$`)
console.log('-----------');
console.log(`Total price: ${totalPrice.toFixed(2)}$`);
}
}

computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])

computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20',
    '17.66', 
'19.30', 'regular'
])