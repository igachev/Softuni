const { PaymentPackage } = require("./12.paymentPackage");
const {expect} = require('chai')

describe('test constructor',() => {

    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage('Ivo',10)
    })

    it('Test 1 - name should be correct',() => {
        expect(paymentPackage._name).to.be.equals('Ivo')
    })

    it('Test 2 - value should be correct',() => {
        expect(paymentPackage._value).to.be.equals(10)
    })

    it('Test 3 - VAT should be equals to the correct default value',() => {
        expect(paymentPackage._VAT).to.be.equals(20)
        expect(typeof paymentPackage._VAT).to.be.equals('number')
    })

    it('Test 4 - active should be equals to the correct default value',() => {
        expect(paymentPackage._active).to.be.equals(true)
        expect(typeof paymentPackage._active).to.be.equals('boolean')
    })

   
})


describe('test getters',() => {
    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage('Ivo',10)
    })

    it('Test 1 - instance should return correct name',() => {
        expect(paymentPackage.name).to.be.equals('Ivo')
    })

    it('Test 2 - instance should return correct value',() => {
        expect(paymentPackage.value).to.be.equals(10)
    })

    it('Test 3 - instance should return correct VAT',() => {
        expect(paymentPackage.VAT).to.be.equals(20)
    })

    it('Test 4 - instance should return correct active',() => {
        expect(paymentPackage.active).to.be.equals(true)
    })
})

describe('test setters',() => {
    it("set incorrect type of name",() => {
        expect(() => new PaymentPackage(10,10)).to.throw(Error)
    })

    it('set empty name',() => {
       expect(() => new PaymentPackage('',10)).to.throw(Error)
    })

    it('change name with new one',() => {
        let paymentPackage = new PaymentPackage('Ivan',10)
        paymentPackage.name = 'Ivo'
        expect(paymentPackage.name).to.be.equals('Ivo')
    })

    it('set incorrect value',() => {
        expect(() => new PaymentPackage('Ivan','10')).to.throw(Error)
    })

    it('set negative value',() => {
        expect(() => new PaymentPackage('Ivan',-10)).to.throw(Error)
    })

    it('change value with new one',() => {
        let paymentPackage = new PaymentPackage('Ivan',10)
        paymentPackage.value = 20;
        expect(paymentPackage.value).to.be.equals(20)
        paymentPackage.value = 0;
        expect(paymentPackage.value).to.be.equals(0)
    })

    it('set incorrect VAT type',() => {
        let paymentPackage = new PaymentPackage('Ivo',5)
        expect(() => paymentPackage.VAT = 'testing').to.throw(Error)
    })

    it('set negative VAT value',() => {
        let paymentPackage = new PaymentPackage('Ivo',5)
        expect(() => paymentPackage.VAT = -10).to.throw(Error)
    })

    it('change VAT value with new one',() => {
        let paymentPackage = new PaymentPackage('Ivo',5)
        paymentPackage.VAT = 8
        expect(paymentPackage.VAT).to.be.equals(8)
    })

    it('set incorrect active type',() => {
        let paymentPackage = new PaymentPackage('Ivo',5)
        expect(() => paymentPackage.active = 'testing').to.throw(Error)
    })

    it('change active value with new one',() => {
        let paymentPackage = new PaymentPackage('Ivo',5)
        paymentPackage.active = false;
        expect(paymentPackage.active).to.be.equals(false)
    })
}) 


describe('toString()',() => {
    it('test active state if true',() => {
        let paymentPackage = new PaymentPackage('Ivan',10)
        const output = [
            `Package: Ivan`,
            `- Value (excl. VAT): 10`,
            `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
          ].join('\n');
    expect(paymentPackage.toString()).to.be.equals(output)
    })


    it('test active state if false',() => {
        let paymentPackage = new PaymentPackage('Ivan',10)
        const output = [
            `Package: Ivan (inactive)`,
            `- Value (excl. VAT): 10`,
            `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
          ].join('\n');
          paymentPackage.active = false;
    expect(paymentPackage.toString()).to.be.equals(output)
    })
})

