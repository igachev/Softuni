function smallestOfThree(n1,n2,n3) {
    let values = []
    values.push(n1,n2,n3)
    let smallestNumber = values[0]
    for(let i = 0; i < values.length; i++) {
    if(values[i] < smallestNumber) {
        smallestNumber = values[i]
    }
    }
    console.log(smallestNumber)
    }
    
    smallestOfThree(2,5,3)
    smallestOfThree(600,342,123)
    smallestOfThree(25,21,4)
    smallestOfThree(2,2,2)