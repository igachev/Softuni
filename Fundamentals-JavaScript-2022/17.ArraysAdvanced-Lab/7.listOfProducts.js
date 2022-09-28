function listOfProducts(input) {
    let sortArr = input.sort()
    for(let i = 0; i < sortArr.length; i++) {
        console.log(`${i + 1}.${sortArr[i]}`);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
    
