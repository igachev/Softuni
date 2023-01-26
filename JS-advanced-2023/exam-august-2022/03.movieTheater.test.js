const { movieTheater } = require("./03. Movie Theater _Resources");
const { expect } = require('chai')

describe("Test movieTheater", function () {

    describe("test ageRestriction()", function () {

        it("if parameter movieRating  is equal to G, return correct result", function () {
            expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie')
        });

        it("if parameter movieRating  is equal to PG, return correct result", function () {
            expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers')
        });

        it("if parameter movieRating  is equal to R, return correct result", function () {
            expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian')
        });

        it("if parameter movieRating  is equal to NC-17, return correct result", function () {
            expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie')
        });

        it("return message for incorrect result", function () {
            expect(movieTheater.ageRestrictions('ok')).to.equal('There are no age restrictions for this movie')
        });
    });

    describe('test moneySpent()',() => {
        it('should throw error if input is invalid type',() => {
        let result1 = () => movieTheater.moneySpent('3',1,2)
        expect(result1).to.throw(Error,'Invalid input')

        let result2 = () => movieTheater.moneySpent()
        expect(result2).to.throw(Error,'Invalid input')

        let result3 = () => movieTheater.moneySpent(3,['Nachos','Popcorn'],2)
        expect(result3).to.throw(Error,'Invalid input')

        let result4 = () => movieTheater.moneySpent(3,['Nachos','Popcorn'])
        expect(result4).to.throw(Error,'Invalid input')
        })

        it('should return correct result with discount',() => {
        expect(movieTheater.moneySpent(3,['Nachos'],['Soda'])).to.equal('The total cost for the purchase with applied discount is 42.80')
        })

        it('should return correct result without discount',() => {
            expect(movieTheater.moneySpent(1,['Nachos'],['Soda'])).to.equal('The total cost for the purchase is 23.50')
            })
    })

    describe('test reservation()',() => {
        it('should throw an error if parameters are invalid',() => {
           let result1 = () => movieTheater.reservation(1,[2])
           expect(result1).to.throw(Error,"Invalid input")

           let result2 = () => movieTheater.reservation(1)
           expect(result2).to.throw(Error,"Invalid input")

           let result3 = () => movieTheater.reservation()
           expect(result3).to.throw(Error,"Invalid input")

           let result4 = () => movieTheater.reservation("2",{one:1})
           expect(result4).to.throw(Error,"Invalid input")
        })

        it('should return correct result',() => {
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }],3)).to.equal(2)
        })
    })
});