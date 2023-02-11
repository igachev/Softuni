const { chooseYourCar } = require("./03.chooseYourCar");
const {expect} = require('chai')

describe('Tests...',() => {


    describe('choosing type()',() => {
        
    it('should throw error if year is less than 1900',() => {
        let handler = () => 
        chooseYourCar.choosingType('Sedan','red',1899);
        expect(handler).to.throw(Error,'Invalid Year!')
    })

    it('should throw error if year is more than 2022',() => {
        let handler = () => 
        chooseYourCar.choosingType('Sedan','red',2023);
        expect(handler).to.throw(Error,'Invalid Year!')
    })

    it('should throw an error if type is different from sedan',() => {
        let handler = () => 
        chooseYourCar.choosingType('Honda','red',2020);
        expect(handler).to.throw(Error,"This type of car is not what you are looking for.")
    })

    it('should return success message if car requirements are met',() => {
    expect(chooseYourCar.choosingType('Sedan','red',2010)).to.be.equals(`This red Sedan meets the requirements, that you have.`)
    expect(chooseYourCar.choosingType('Sedan','red',2021)).to.be.equals(`This red Sedan meets the requirements, that you have.`)
    })

    it('should return WARNING message if car requirements are not met',() => {
        expect(chooseYourCar.choosingType('Sedan','red',2009)).to.be.equals(`This Sedan is too old for you, especially with that red color.`)
    })

    })

    describe('brandName()',() => {
       it('should throw error with invalid parameters',() => {
        let handler1 = () => chooseYourCar.brandName('text',3)
        let handler2 = () => chooseYourCar.brandName(3,'text')
        let handler3 = () => chooseYourCar.brandName(['BMW','Audi'],3)
        let handler4 = () => chooseYourCar.brandName(['BMW','Audi','Honda','Mazda'],-3)
        
        expect(handler1).to.throw(Error,'Invalid Information!')
        expect(handler2).to.throw(Error,'Invalid Information!')
        expect(handler3).to.throw(Error,'Invalid Information!')
        expect(handler4).to.throw(Error,'Invalid Information!')
       })

       it('should return a string',() => {
        expect(chooseYourCar.brandName(['BMW','Audi','Honda','Mazda'],1)).to.be.a('string')
       })

       it('should return correct result after removed element',() => {
        expect(chooseYourCar.brandName(['BMW','Audi','Honda','Mazda'],1)).to.be.equals('BMW, Honda, Mazda')
       })
    })

    describe('carFuelConsumption()',() => {
        it('should throw an error with invalid parameters',() => {
        let handler1 = () => chooseYourCar.carFuelConsumption(-2,-5)
        let handler2 = () => chooseYourCar.carFuelConsumption('2',3)
        let handler3 = () => chooseYourCar.carFuelConsumption(2,'3')
        let handler4 = () => chooseYourCar.carFuelConsumption()

            expect(handler1).to.throw(Error,'Invalid Information!')
            expect(handler2).to.throw(Error,'Invalid Information!')
            expect(handler3).to.throw(Error,'Invalid Information!')
            expect(handler4).to.throw(Error,'Invalid Information!')
        })

       it('should return If the liters/100km is more than 7L.',() => {
        expect(chooseYourCar.carFuelConsumption(10,10)).to.be.equals('The car burns too much fuel - 100.00 liters!')
       })

       it('If the liters/100km is less or equal to 7L.',() => {
        expect(chooseYourCar.carFuelConsumption(90,5)).to.be.equals('The car is efficient enough, it burns 5.56 liters/100 km.')
        expect(chooseYourCar.carFuelConsumption(71.4,5)).to.be.equals('The car is efficient enough, it burns 7.00 liters/100 km.')
       })
    })
})
