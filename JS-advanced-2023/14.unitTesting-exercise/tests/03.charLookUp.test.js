const { lookupChar } = require("../03.charLookUp");
const {expect} = require('chai')

describe('test function lookUpChar()',() => {
    it('Test 1: If the first parameter is NOT a string or the second parameter is NOT a number - return undefined',() => {
        expect(lookupChar(true,[])).to.be.equals(undefined)
        expect(lookupChar({},'test')).to.be.equals(undefined)
        expect(lookupChar('test',2.5)).to.be.equals(undefined)
        expect(lookupChar('test','test')).to.be.equals(undefined)
        expect(lookupChar(2,2)).to.be.equals(undefined)
    })

    it('Test 2: If index is bigger than string length - return "Incorrect index". ',() => {
        expect(lookupChar('one',5)).to.be.equals('Incorrect index')
    })

    it('Test 3: If index is less than string length - return "Incorrect index". ',() => {
        expect(lookupChar('one',-3)).to.be.equals('Incorrect index')
    })

    it("Test 4: lookupChar('one',1) should return n",() => {
        expect(lookupChar('one',1)).to.be.equals('n')
    })

    it('Test 5: result should be a string',() => {
        expect(lookupChar('one',1)).to.be.a('string')
    })

    
})