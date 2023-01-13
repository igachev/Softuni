function calculator() {
    // TODO:
    let selector1;
    let selector2
    let resultSelector;

    let operations =  {
        init:(selectorOne,selectorTwo,resultSelectorId) => {
        selector1 = document.querySelector(selectorOne)
        selector2 = document.querySelector(selectorTwo)
        resultSelector = document.querySelector(resultSelectorId)
        },

        add:() => {
            let firstNumber = Number(selector1.value)
            let secondNumber = Number(selector2.value)
            let sum = firstNumber + secondNumber
            resultSelector.value = sum;
        },

        subtract:() => {
            let firstNumber = Number(selector1.value)
            let secondNumber = Number(selector2.value)
            let subtract = firstNumber - secondNumber
            resultSelector.value = subtract;
        }
    }

    return operations
}

const calculate = calculator (); 
debugger
calculate.init ('#num1', '#num2', '#result'); 



