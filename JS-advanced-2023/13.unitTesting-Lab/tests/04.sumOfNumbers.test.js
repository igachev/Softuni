const { sum } = require("../04.sumOfNumbers");
const { expect } = require('chai')

describe('sum',() => {
    it('should return correct result',() => {
        //arrange
        let array = [1,2,3]
        //act
        let result = sum(array)
        //assert
        expect(result).to.be.equal(6)
    });
})