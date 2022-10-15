function furniture(input) {
let index = 0;
let totalMoney = 0;
console.log('Bought furniture:');

while(input[index] !== 'Purchase') {
let product = input[index]
let pattern = /[>]{2}(?<name>[A-Za-z]+)[<]{2}(?<price>[\d]*[\.]?[\d]+)!(?<quantity>[\d]+)/g
let validProduct = pattern.exec(product)

while(validProduct !== null) {
    let productName = validProduct.groups['name']
    console.log(productName);
    let price = validProduct.groups['price']
    let quantity = validProduct.groups['quantity']
    totalMoney += (price * quantity)
    validProduct = pattern.exec(product)
}

    index++
}

console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])

furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase'])

furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase'])