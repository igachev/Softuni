const { mathEnforcer } = require("../04.mathEnforcer");
const {expect} = require('chai')

describe('mathEnforcer',() => {

    it('Test 1: test addFive(num) function-If the parameter is NOT a number, the function should return undefined.',() => {
        expect(mathEnforcer.addFive('5')).to.be.equals(undefined)
    })
    it('Test 2: test addFive(num) function-If the parameter is a number, add 5 to it, and return the result.',() => {
        expect(mathEnforcer.addFive(5)).to.be.equals(10)
    })
    it('Test 3: test addFive(num) function with floating number',() => {
        expect(mathEnforcer.addFive(2.5)).to.be.closeTo(7.5,0.1)
    })
    it('Test 4: test addFive(num) function with negative number',() => {
        expect(mathEnforcer.addFive(-3)).to.be.equals(2)
    })


    it('Test 5: test subtractTen(num) function-If the parameter is NOT a number, the function should return undefined.',() => {
        expect(mathEnforcer.subtractTen('5')).to.be.equals(undefined)
    })
    it('Test 6: test subtractTen(num) function-If the parameter is a number, add 5 to it, and return the result.',() => {
        expect(mathEnforcer.subtractTen(10)).to.be.equals(0)
    })
    it('Test 7: test subtractTen(num) function with floating number',() => {
        expect(mathEnforcer.subtractTen(12.5)).to.be.closeTo(2.5,0.1)
    })
    it('Test 8: test subtractTen(num) function with negative number',() => {
        expect(mathEnforcer.subtractTen(-3)).to.be.equals(-13)
    })


    it('Test 9: test sum(num1,num2) function-If the parameter is NOT a number, the function should return undefined.',() => {
        expect(mathEnforcer.sum('5',3)).to.be.equals(undefined)
        expect(mathEnforcer.sum(3,'5')).to.be.equals(undefined)
    })
    it('Test 10: test sum(num1,num2) function-If the parameter is a number, add 5 to it, and return the result.',() => {
        expect(mathEnforcer.sum(5,5)).to.be.equals(10)
    })
    it('Test 11: test sum(num1,num2) function with floating number',() => {
        expect(mathEnforcer.sum(4.5,4.5)).to.be.closeTo(9,0.1)
    })
    it('Test 12: test sum(num1,num2) function with negative number',() => {
        expect(mathEnforcer.sum(-3,-3)).to.be.equals(-6)
    })
})
