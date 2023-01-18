const { expect } = require('chai')
const { createCalculator } = require('../07.addSubtract')

describe('create Calculator',() => {

    it('Test 1: check if properties add,subtract,get exists',() => {
        expect(createCalculator()).to.have.property('add')
        expect(createCalculator()).to.have.property('get')
        expect(createCalculator()).to.have.property('subtract')
    })

    it(`Test 2: internal sum can't be modified`,() => {
        
    expect(createCalculator().value).to.be.equals(undefined)
    })

  it('Test 3: add() function get a parameter as number or string',() => {
    let calc = createCalculator()
    calc.add(3)
    calc.add('3')
    expect(calc.get()).to.be.equals(6)
  })

  it('Test 4: subract() function get a parameter as number or string',() => {
    let calc = createCalculator()
    calc.subtract(3)
    calc.subtract('3')
    expect(calc.get()).to.be.equals(-6)
  })

  it('Test 5: return type of function to be object',() => {
    expect(typeof createCalculator()).to.be.equals('object')
  })
})