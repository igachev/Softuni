const { rgbToHexColor } = require("../06.rgbToHex");
const { expect } = require('chai')

describe('rgbToHexColor',() => {

    it("Test 1: converts to black", () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    });

    it('Test 2: boolean type should return undefined',() => {
        expect(rgbToHexColor(true,0,0)).to.be.an('undefined')
        expect(rgbToHexColor(0,true,0)).to.be.an('undefined')
        expect(rgbToHexColor(0,0,true)).to.be.an('undefined')
    })

    it('Test 3: out of lower range input must return undefined',() => {
        expect(rgbToHexColor(0,0,-1)).to.be.an('undefined')
        expect(rgbToHexColor(0,-1,0)).to.be.an('undefined')
        expect(rgbToHexColor(-1,0,0)).to.be.an('undefined')
    })

    it('Test 4: out of upper range input must return undefined',() => {
        expect(rgbToHexColor(0,0,256)).to.be.an('undefined')
        expect(rgbToHexColor(0,256,0)).to.be.an('undefined')
        expect(rgbToHexColor(256,0,0)).to.be.an('undefined')
    })

    it('Test 5: return color #326496 if input is:50,100,150',() => {
        let result = rgbToHexColor(50,100,150)
        expect(result).to.be.equals('#326496')
    })

    it("Test 6: returns undefined for missing params", () => {
        expect(rgbToHexColor(0, 0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    });

    it("Test 7: returns undefined for floats", () => {
        expect(rgbToHexColor(1.1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 1.1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 1.1)).to.be.undefined;
    });

    it("Test 8: returns undefined for string", () => {
        expect(rgbToHexColor('1.1', 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, '1.1', 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, '1.1')).to.be.undefined;
    });

    it("Test 9: converts to white", () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    });
})
