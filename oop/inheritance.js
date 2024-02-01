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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function () {
        console.log(this.name, 'is moving...');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(isGoodBoy, name) {
        var _this = _super.call(this, name) || this;
        _this.isGoodBoy = isGoodBoy;
        return _this;
    }
    Dog.prototype.growl = function () {
        console.log(this.name, 'is growling...', this.isGoodBoy);
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.meow = function () {
        console.log(this.name, 'is meowing...');
    };
    return Cat;
}(Animal));
var Hen = /** @class */ (function (_super) {
    __extends(Hen, _super);
    function Hen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hen.prototype.move = function () {
        console.log(this.name, 'moving... (hen)');
    };
    return Hen;
}(Animal));
var lassie = new Dog(true, 'dog');
lassie.move();
lassie.growl();
var kitty = new Cat('kitty');
kitty.meow();
var chick = new Hen('chick');
chick.move();
