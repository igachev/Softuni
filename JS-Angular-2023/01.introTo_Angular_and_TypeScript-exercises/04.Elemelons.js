var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Elements;
(function (Elements) {
    Elements["Water"] = "Water";
    Elements["Fire"] = "Fire";
    Elements["Earth"] = "Earth";
    Elements["Air"] = "Air";
})(Elements || (Elements = {}));
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.element = Elements.Water;
    }
    Melon.prototype.elementIndex = function () {
        return this.weight * this.melonSort.length;
    };
    Melon.prototype.toString = function () {
        return "Element: ".concat(this.element, "\n        Sort: ").concat(this.melonSort, "\n        Element Index: ").concat(this.elementIndex());
    };
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = Elements.Water;
        return _this;
    }
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = Elements.Fire;
        return _this;
    }
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = Elements.Earth;
        return _this;
    }
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = Elements.Air;
        return _this;
    }
    return Airmelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.currentElement = Elements.Water;
        return _this;
    }
    Melolemonmelon.prototype.morph = function () {
        var elementsArray = [Elements.Water, Elements.Fire, Elements.Earth, Elements.Air];
        var currentIndex = elementsArray.indexOf(this.currentElement);
        var nextIndex = (currentIndex + 1) % elementsArray.length;
        this.element = elementsArray[nextIndex];
        this.currentElement = elementsArray[nextIndex];
        return this.element;
    };
    return Melolemonmelon;
}(Melon));
var watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
var uniqueMelon = new Melolemonmelon(15, "standard");
console.log(uniqueMelon.morph());
console.log(uniqueMelon.morph());
console.log(uniqueMelon.toString());
var airmelon = new Airmelon(20, 'small');
console.log(airmelon.toString());
