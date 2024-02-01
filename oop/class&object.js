/**
 *  Ts is object oriented js. Ts supports object-oriented programming
 *  features like classes, interfaces, etc.
 *
 *  A class in terms of OOP is a blueprint for creating objects.
 *
 *  A class encapsulates data for the object.
 *
 *  Typescript gives built in support for this concept called class.
 *
 */
var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.sayHello = function () {
        console.log('Hello,', this.name); // this will refer to the current class
    };
    return student;
}());
var std1 = new student();
std1.name = 'Appu';
std1.age = 12;
std1.sayHello();
var std2 = new student();
std2.name = 'Ammu';
std2.age = 13;
std2.sayHello();
var std3 = new student();
std3.name = 'Abi';
std3.age = 7;
std3.sayHello();
var std4 = new student();
std4.name = 'Achu';
std4.age = 8;
std4.sayHello();
var std5 = new student();
std5.name = 'veshal';
std5.age = 22;
std5.sayHello();
console.log(std1);
console.log(std2);
console.log(std3);
console.log(std4);
console.log(std5);
