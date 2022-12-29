function smallestTwoNumbers(input) {
    
    let arrOfTwoSmallest = []
    for(let i = 0; i < 2; i++) {
        findSmall(input)
    }
    console.log(arrOfTwoSmallest.join(' '));

    function findSmall(inputArr) {
        let smallestNumber = inputArr[0]
        let positionOfSmallestNumber
        for(let i = 0; i < inputArr.length; i++) {
        if(inputArr[i] < smallestNumber) {
            smallestNumber = inputArr[i]
            positionOfSmallestNumber = i
        }
        }
        arrOfTwoSmallest.push(smallestNumber);
        inputArr.splice(positionOfSmallestNumber,1)
        }
    
}

smallestTwoNumbers([30, 15, 50, 5])
smallestTwoNumbers([3, 0, 10, 4, 7, 3])