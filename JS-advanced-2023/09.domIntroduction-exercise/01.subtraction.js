function subtract() {
    let result = document.getElementById('result')
    let firstNumber = document.getElementById('firstNumber').value
    let secondNumber = document.getElementById('secondNumber').value
    let subtractNumbers = Number(firstNumber) - Number(secondNumber)
    result.innerText = subtractNumbers
}