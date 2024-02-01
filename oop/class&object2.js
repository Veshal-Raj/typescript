var Person1 = /** @class */ (function () {
    // constructor
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    // method
    Person1.prototype.sayHello = function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    return Person1;
}());
var A = new Person1('John8', 20);
var A1 = new Person1('John7', 21);
var A2 = new Person1('John6', 22);
var A3 = new Person1('John5', 23);
var A4 = new Person1('John4', 24);
var A5 = new Person1('John3', 25);
var A6 = new Person1('John2', 26);
var A7 = new Person1('John1', 27);
// let ab = A.sayHello()
console.log(A.sayHello());
console.log(A1.sayHello());
console.log(A2.sayHello());
console.log(A3.sayHello());
console.log(A4.sayHello());
console.log(A5.sayHello());
console.log(A6.sayHello());
console.log(A7.sayHello());
// console.log(A.sayHello())
// console.log(A1.sayHello())
// console.log(A1.sayHello())
// console.log(A1.sayHello())
