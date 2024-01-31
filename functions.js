var add = function (a, b) { return a + b; };
var sub = function (a, b) { return a - b; };
var mul = function (a, b) { return a * b; };
var div = function (a, b) { return a / b; };
// always give the return type of the function
var hello = function () { return console.log('hello'); };
var helloWorld = function () {
    return 10;
};
// ===================================== //
var makeRasberrySmoothie = function (rasberries, nutbutter) {
    var newSmoothie = {
        rasberries: rasberries,
        nutbutter: nutbutter
    };
    return newSmoothie;
};
// default
var makeRasberrySmoothie1 = function (rasberries, nutbutter) {
    if (nutbutter === void 0) { nutbutter = false; }
    var newSmoothie = {
        rasberries: rasberries,
        nutbutter: nutbutter,
    };
    if (nutbutter)
        newSmoothie.nutbutter = nutbutter;
    return newSmoothie;
};
makeRasberrySmoothie1(true);
// optional
var makeRasberrySmoothie2 = function (rasberries, nutbutter) {
    var newSmoothie = {
        rasberries: rasberries,
        nutbutter: false,
    };
    return newSmoothie;
};
makeRasberrySmoothie2(true);
// Rest parameters
var greet = function (firstName) {
    var restOfNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfNames[_i - 1] = arguments[_i];
    }
    console.log("Hello, my name is ".concat(firstName));
    for (var _a = 0, restOfNames_1 = restOfNames; _a < restOfNames_1.length; _a++) {
        var name_1 = restOfNames_1[_a];
        console.log("".concat(name_1));
    }
};
greet('veshal', 'raj', 'kkkkkk', 'ssssssss');
function adding(a, b) {
    return a + b;
}
console.log(adding(1, 8));
console.log(adding('hello', ' world'));
