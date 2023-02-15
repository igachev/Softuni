const {expect} = require('chai')
const { motorcycleRider } = require('./Motorcycle Rider')

describe("Testing object motorcycleRider....", function() {

    describe("licenseRestriction(category)", function() {
        it("if category is AM should return correct result", function() {
            expect(motorcycleRider.licenseRestriction('AM')).to.equals("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.")
        });

        it("if category is A1 should return correct result", function() {
            expect(motorcycleRider.licenseRestriction('A1')).to.equals("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.")
        });

        it("if category is A2 should return correct result", function() {
            expect(motorcycleRider.licenseRestriction('A2')).to.equals("Motorcycles with maximum power of 35KW. and the minimum age is 18.")
        });

        it("if category is A should return correct result", function() {
            expect(motorcycleRider.licenseRestriction('A')).to.equals("No motorcycle restrictions, and the minimum age is 24.")
        });

        it('should throw error if parameter is not a string',() => {
            expect(() => motorcycleRider.licenseRestriction(1)).to.throw(Error,"Invalid Information!")
            expect(() => motorcycleRider.licenseRestriction()).to.throw(Error,"Invalid Information!")
            expect(() => motorcycleRider.licenseRestriction(['hello'])).to.throw(Error,"Invalid Information!")
            expect(() => motorcycleRider.licenseRestriction({a:"hello"})).to.throw(Error,"Invalid Information!")
            expect(() => motorcycleRider.licenseRestriction('Z')).to.throw(Error,"Invalid Information!")
        })
     });


    describe('motorcycleShowroom(engineVolume,maximumEngineVolume)',() => {
        it('should return correct result',() => {
            let result1 = motorcycleRider.motorcycleShowroom(['125','250','600'],300)
            expect(result1).to.equals("There are 2 available motorcycles matching your criteria!")

            let result2 = motorcycleRider.motorcycleShowroom(['125','250','600'],250)
            expect(result2).to.equals("There are 2 available motorcycles matching your criteria!")

            let result3 = motorcycleRider.motorcycleShowroom(['125','250','600'],100)
            expect(result3).to.equals("There are 0 available motorcycles matching your criteria!")

            let result4 = motorcycleRider.motorcycleShowroom(['125','250','600'],50)
            expect(result4).to.equals("There are 0 available motorcycles matching your criteria!")

            expect( motorcycleRider.motorcycleShowroom(['50'], 50)).to.equal('There are 1 available motorcycles matching your criteria!');
        expect(motorcycleRider.motorcycleShowroom([300,250,400,550,"five", -6], 600)).to.equal('There are 4 available motorcycles matching your criteria!');
        expect(motorcycleRider.motorcycleShowroom([300,40,20,50,"five", -6], 600)).to.equal('There are 2 available motorcycles matching your criteria!');
        expect(motorcycleRider.motorcycleShowroom(['300','250','400','550','fifty','-1000',], 600)).to.equal('There are 4 available motorcycles matching your criteria!');
        expect(motorcycleRider.motorcycleShowroom([0], 600)).to.equal('There are 0 available motorcycles matching your criteria!');
        })

        it('should throw error if parameters are not array and number,if array is empty,number is less than 50',() => {
            expect(() => motorcycleRider.motorcycleShowroom(1,['20'])).to.throw(Error,'Invalid Information!')
            expect(() => motorcycleRider.motorcycleShowroom('1',{a:1})).to.throw(Error,'Invalid Information!')
            expect(() => motorcycleRider.motorcycleShowroom()).to.throw(Error,'Invalid Information!')
            expect(() => motorcycleRider.motorcycleShowroom(['20'])).to.throw(Error,'Invalid Information!')
            expect(() => motorcycleRider.motorcycleShowroom([],60)).to.throw(Error,'Invalid Information!')
            expect(() => motorcycleRider.motorcycleShowroom(['120','220','320'],49)).to.throw(Error,'Invalid Information!')
            expect(() => motorcycleRider.motorcycleShowroom([],49)).to.throw(Error,'Invalid Information!')
            expect(() => { motorcycleRider.motorcycleShowroom(['300'], -1) }).to.throw('Invalid Information!');
        })
    })

    describe('otherSpendings (equipment, consumables, discount) ',() => {
        it('should return result with discount if discount is set to true',() => {
            let result1 = motorcycleRider.otherSpendings(['helmet','jacked'],['engine oil','oil filter'],true)
            expect(result1).to.equals('You spend $540.00 for equipment and consumables with 10% discount!')
            let result2 = motorcycleRider.otherSpendings(['helmet','jacked'],[],true)
            expect(result2).to.equals('You spend $450.00 for equipment and consumables with 10% discount!')
        })

        it('should return result without discount if discount is set to false',() => {
            let result3 = motorcycleRider.otherSpendings(['helmet','jacked'],['engine oil','oil filter'],false)
            expect(result3).to.equals('You spend $600.00 for equipment and consumables!')
            let result4 = motorcycleRider.otherSpendings([],['engine oil','oil filter'],false)
            expect(result4).to.equals('You spend $100.00 for equipment and consumables!')
        })

        it('should throw an error if parameters are invalid',() => {
            expect(() => motorcycleRider.otherSpendings('jacked',['engine oil'],true)).to.throw(Error,'Invalid Information!')
            expect(() => motorcycleRider.otherSpendings(['jacked'],'engine oil',false)).to.throw(Error,'Invalid Information!')
            expect(() => motorcycleRider.otherSpendings(['jacked'],['engine oil'],'true')).to.throw(Error,'Invalid Information!')
            expect(() => motorcycleRider.otherSpendings()).to.throw(Error,'Invalid Information!')
            expect(() => motorcycleRider.otherSpendings('jacked','engine oil','true')).to.throw(Error,'Invalid Information!')
            expect(() => motorcycleRider.otherSpendings(['jacked'],['engine oil'])).to.throw(Error,'Invalid Information!')
        })
    })
});