function simpleCalculator(n1,n2,operator) {
    let allOperators = {
        multiply: n1*n2,
        divide: n1/n2,
        add: n1+n2,
        subtract: n1-n2
    }
    console.log(allOperators[operator])
    }




simpleCalculator(5,5,'multiply')
simpleCalculator(40,8,'divide')
simpleCalculator(12,19,'add');
simpleCalculator(50,13,'subtract');