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
// ================================== method overriding
var Animals = /** @class */ (function () {
    function Animals() {
    }
    Animals.prototype.makeSound = function () {
        console.log('Animal Sound');
    };
    return Animals;
}());
var Dogs = /** @class */ (function (_super) {
    __extends(Dogs, _super);
    function Dogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dogs.prototype.makeSound = function () {
        console.log('Barkkk');
    };
    return Dogs;
}(Animals));
var Cats = /** @class */ (function (_super) {
    __extends(Cats, _super);
    function Cats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cats;
}(Animals));
function makeAnimalSound(animal) {
    animal.makeSound();
}
var Animal1 = new Animals();
var Animal2 = new Dogs();
var Animal3 = new Cats();
// console.log(Animal1)
// console.log(Animal2)
// Animal1.makeSound()
// Animal2.makeSound()
makeAnimalSound(Animal1);
makeAnimalSound(Animal2);
makeAnimalSound(Animal3);
// ============================================= method overloading
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        if (typeof x === 'number' && typeof y === 'number')
            return x + y;
        else if (typeof x === 'string' && typeof y === 'string')
            return x + y;
    };
    return Calculator;
}());
var calc = new Calculator();
console.log(calc.add(1, 2));
console.log(calc.add('1', '2'));
