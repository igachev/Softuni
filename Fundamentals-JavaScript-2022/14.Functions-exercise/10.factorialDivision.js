function factorialDivision(n1,n2) {
    let firstNumber = factorial(n1);
    let secondNumber = factorial(n2);
    let division = firstNumber / secondNumber;
    console.log(division.toFixed(2));
    
    
    function factorial(n) {
        if(n < 1) {
            return 1;
        }
        return factorial(n-1) * n
    }

}

factorialDivision(5,2)
factorialDivision(6,2)