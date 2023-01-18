const { isOddOrEven } = require("../02.evenOrOdd");
const {expect} = require('chai')

describe('test function isOddOrEven',() => {
    it('Test 1: return undefined if input is different from string',() => {
        expect(isOddOrEven(2)).to.be.equals(undefined)
        expect(isOddOrEven(false)).to.be.equals(undefined)
        expect(isOddOrEven([])).to.be.equals(undefined)
    })

    it('Test 2: check result with even string length',() => {
        expect(isOddOrEven('flat')).to.be.equals('even')
    })

    it('Test 3: check result with odd string length',() => {
        expect(isOddOrEven('house')).to.be.equals('odd')
    })
})
