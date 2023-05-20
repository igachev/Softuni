
const methods = [
    {name:'crypto-wallet', value:'Crypto Wallet', selected:false},
    {name:'credit-card', value:'Credit Card', selected:false},
    {name:'debit-card', value:'Debit Card', selected:false},
    {name:'paypal', value:'PayPal', selected:false}
]

function payment(currentMethod) {
const updatedMethods = methods.map((m) => 
m.name === currentMethod 
? {...m, selected:true}
: m
)
return updatedMethods
}

module.exports = payment