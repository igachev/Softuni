const { carService } = require("./03. Car Service_Resources");
const {expect} = require('chai')

describe("Tests …", function() {
    describe("isItExpensive()", function() {

it("should return correct result if parameter is Engine or Transmission", function() {
        expect(carService.isItExpensive('Engine')).to.equals('The issue with the car is more severe and it will cost more money')
        expect(carService.isItExpensive('Transmission')).to.equals('The issue with the car is more severe and it will cost more money')
});

it('if the parameter conditions are not met',() => {
    expect(carService.isItExpensive('Wheels')).to.equals(`The overall price will be a bit cheaper`)
    expect(carService.isItExpensive()).to.equals(`The overall price will be a bit cheaper`)
    expect(carService.isItExpensive(2)).to.equals(`The overall price will be a bit cheaper`)
})
     });

describe('discount()',() => {
    it('should throw error if input parameters are invalid',() => {
    let handleError1 = () => carService.discount('test',1)
    let handleError2 = () => carService.discount()
    let handleError3 = () => carService.discount({a:1},2)

    expect(handleError1).to.throw(Error,"Invalid input")
    expect(handleError2).to.throw(Error,"Invalid input")
    expect(handleError3).to.throw(Error,"Invalid input")
    })

    it('should return 15% discount',() => {
      expect(carService.discount(3,7)).to.equals('Discount applied! You saved 1.05$')
    })

    it('should return 30% discount',() => {
        expect(carService.discount(3,8)).to.equals('Discount applied! You saved 1.2$')
      })

    it('should return no discount',() => {
        expect(carService.discount(2,7)).to.equals("You cannot apply a discount")
        expect(carService.discount(1,8)).to.equals("You cannot apply a discount")
    })
})


describe('partsToBuy()',() => {
    it('should throw error if both parameters are not arrays',() => {
        let handleError1 = () => carService.partsToBuy('test',1)
        let handleError2 = () => carService.partsToBuy()
        let handleError3 = () => carService.partsToBuy({a:1},2)
    
        expect(handleError1).to.throw(Error,"Invalid input")
        expect(handleError2).to.throw(Error,"Invalid input")
        expect(handleError3).to.throw(Error,"Invalid input")
        })

    it('should return 0 if partsCatalog is empty',() => {
       expect(carService.partsToBuy([],["blowoff valve", "injectors"])).to.equals(0)
    })

    it('should return correct total price',() => {
       expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],["blowoff valve", "injectors"])).to.equals(145)
    })
})
     // TODO: …
});