function buildWall(numbers) {
    let oneCubicYard = 1900;
    let oneFoot = 195;
    let concreteEachDay = 0;
    let eachDayArr = []
    let totalConcrete = 0;

    numbers = numbers.filter((num) => num < 30)
    let crews = numbers.length;

    while(crews !== 0) {

        for(let i = 0; i < numbers.length; i++) {

            if(numbers[i] < 30) {
                numbers[i]++ 
                concreteEachDay += oneFoot 
                if(numbers[i] === 30) {
                    crews--;
                }  
            } 
        
        }
            eachDayArr.push(concreteEachDay)
            totalConcrete += concreteEachDay; 
            concreteEachDay = 0;  
    }

    let finalCost = totalConcrete * oneCubicYard;
    console.log(eachDayArr.join(', '));
    console.log(`${finalCost} pesos`);
}

buildWall([21, 25, 28])
buildWall([17])
buildWall([17, 22, 17, 19, 17])