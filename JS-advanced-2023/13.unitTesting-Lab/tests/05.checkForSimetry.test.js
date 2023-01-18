const { isSymmetric } = require("../05.checkForSimetry");
const { expect } = require('chai')

describe('isSymmetric',() => {

    it('Test 1: return false if input is not an array',() => {
        //arrange
        let invalidArr = 'not valid'
        //act
        let result = isSymmetric(invalidArr)
        //assert
        expect(result).to.be.equals(false)
    })

    it('Test 2: Return true if the input number array is symmetric',() => {
        //arrange
        let validArr = [1,2,1]
        //act
        let result = isSymmetric(validArr)
        //assert
        expect(result).to.be.equals(true)
    })

    it('Test 3: Return false if the input array is not symmetric',() => {
             //arrange
             let invalidArr = [1,2,2]
             //act
             let result = isSymmetric(invalidArr)
             //assert
             expect(result).to.be.equals(false)
    })

    it("Test 4: return false for type mismatched elements",() => {
        //arrange
        let invalidArr = [1,2,'1']
        //act
        let result = isSymmetric(invalidArr)
        //assert
        expect(result).to.be.equals(false)
    })

    it("Test 5: works with symmetric string array", () => {
        let validArr = ['1','2','1']
        let result = isSymmetric(validArr)
        expect(result).to.be.equals(true)
    })
})