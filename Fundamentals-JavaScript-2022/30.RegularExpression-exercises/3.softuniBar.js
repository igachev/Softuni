function softuniBar(input) {
let index = 0;
let totalIncome = 0;

while(input[index] !== 'end of shift') {

    let text = input[index]
    let pattern = /%(?<customer>[A-Z][a-z]*)%[^,$%.]*?<(?<product>\w+)>[^,$%.]*?\|(?<count>[\d]{1,})\|[^,$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/g
    let validLine = pattern.exec(text)

    while(validLine != null) {
        let customer = validLine.groups['customer']
        let product = validLine.groups['product']
        let count = validLine.groups['count']
        let price = validLine.groups['price']
        count = Number(count)
        price = Number(price)
      
        let productPrice = count * price
        totalIncome += productPrice;
        let result = `${customer}: ${product} - ${productPrice.toFixed(2)}`
        console.log(result);
        validLine = pattern.exec(text)
    }

    index++
}
console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softuniBar(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])

softuniBar(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift'])
