function orders(product,quantity) {
    let result = 0;
switch(product) {
    case 'coffee':
         result = 1.50 * quantity;
    console.log(result.toFixed(2));
    break;

    case 'water':
         result = 1 * quantity;
    console.log(result.toFixed(2));
    break;

    case 'coke':
         result = 1.40 * quantity;
    console.log(result.toFixed(2));
    break;

    case 'snacks':
         result = 2 * quantity;
    console.log(result.toFixed(2));
    break;
}
}

orders("water", 5)
orders("coffee", 2)