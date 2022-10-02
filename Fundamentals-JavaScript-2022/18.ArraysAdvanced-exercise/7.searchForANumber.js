function searchForANumber(arr1,arr2) {
    let numberOfElements = arr2.shift()
    let deleteElements = arr2.shift()
    let searchNumber = arr2.shift()
    let counter = 0;
    
    let copyFromArr1 = arr1.slice(0,numberOfElements)
    copyFromArr1.splice(0,deleteElements)
    
    for(let value of copyFromArr1) {
        if(value === searchNumber) {
            counter++;
        }
    }
    
    console.log(`Number ${searchNumber} occurs ${counter} times.`);
    }
    
    searchForANumber([5, 2, 3, 4, 1, 6],
        [5, 2, 3])
    
    searchForANumber([7, 1, 5, 8, 2, 7],
        [3, 1, 5])