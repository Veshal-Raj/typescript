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
var Animall = /** @class */ (function () {
    function Animall(name) {
        this.name = name;
    }
    Animall.prototype.makeSound = function () {
        console.log('Animal Sound');
    };
    return Animall;
}());
var Dogg = /** @class */ (function (_super) {
    __extends(Dogg, _super);
    function Dogg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dogg.prototype.makeSound = function () {
        console.log('Bark');
    };
    Dogg.prototype.eat = function (food) {
        console.log("".concat(this.name, " is eating ").concat(food));
    };
    return Dogg;
}(Animall));
var Catt = /** @class */ (function (_super) {
    __extends(Catt, _super);
    function Catt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Catt.prototype.makeSound = function () {
        console.log('Meow');
    };
    Catt.prototype.eat = function (food) {
        console.log("".concat(this.name, " is eating ").concat(food));
    };
    return Catt;
}(Animall));
var dog = new Dogg('Buddy');
var cat = new Catt('Whiskers');
dog.eat('bones');
cat.eat('fish');
