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
// product class
var Product = /** @class */ (function () {
    function Product(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    Product.prototype.updateQuantity = function (quantity) {
        this.quantity += quantity;
        console.log("Total quantity is ".concat(this.quantity, " of product ").concat(this.name));
    };
    Product.prototype.getProductInfo = function () {
        console.log("Product name: ".concat(this.name, ", Price: ").concat(this.price, ", Quantity: ").concat(this.quantity));
    };
    return Product;
}());
var Electronic = /** @class */ (function (_super) {
    __extends(Electronic, _super);
    function Electronic(name, price, quantity, brand) {
        var _this = _super.call(this, name, price, quantity) || this;
        _this.brand = brand;
        return _this;
    }
    Electronic.prototype.getProductInfo = function () {
        console.log("Product name: ".concat(this.name, ", Brand: ").concat(this.brand, ", Price: ").concat(this.price, ", Quantity: ").concat(this.quantity));
    };
    return Electronic;
}(Product));
var Furniture = /** @class */ (function (_super) {
    __extends(Furniture, _super);
    function Furniture(name, price, quantity, brand) {
        var _this = _super.call(this, name, price, quantity) || this;
        _this.brand = brand;
        return _this;
    }
    Furniture.prototype.getProductInfo = function () {
        console.log("Product name: ".concat(this.name, ", Brand: ").concat(this.brand, ", Price: ").concat(this.price, ", Quantity: ").concat(this.quantity));
    };
    return Furniture;
}(Product));
var Mobile = new Electronic('Realme XT', 30000, 10, 'Realme');
Mobile.getProductInfo();
Mobile.updateQuantity(20);
Mobile.getProductInfo();
var Chair = new Furniture('SandalWood Chair', 3000, 30, 'Chair');
Chair.getProductInfo();
Chair.updateQuantity(290);
Chair.getProductInfo();
