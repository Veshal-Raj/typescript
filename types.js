// implicit type checking
var isStudent = true;
// isStudent = 'false' --> type error
// explicit type checking
var isStudents = true;
// isStudents = 'false'  --> type error
// array
var friends = ["bob", "alice", "joe"];
var nameAgeSchool;
nameAgeSchool = ["veshal", 13, "SVNS"];
var a;
// a = ['hello', 1 ]  --> this will throw error, this is expecting the same value inside the array
var b = ["abcd", 11];
b[1].toString();
console.log("b-------", b);
// any
var notSure = 8;
notSure = "a string instead";
notSure = true;
// void (similar to saying undefined)
var log = function () {
    console.log("hello world");
    // return 8
};
// null and undefined
var u = undefined;
var n = null;
var number = 3;
// number = null; // this will throw error, because in the tsconfig.json, we are given strictNullCheck true
// number = undefined; // this will throw error, because in the tsconfig.json, we are given strictNullCheck true
// enums
var foo = function (school) {
    switch (school) {
        case 1: {
            // Waterloo
        }
        case 2: {
            // Harvard
        }
        default: {
            throw Error();
        }
    }
};
// Waterloo = 1, Harvard = 2, Standford = 3, Berkely = 4 
// using enum (numeric enum)
var Schools;
(function (Schools) {
    Schools[Schools["Waterloo"] = 0] = "Waterloo";
    // Waterloo = 1,
    Schools[Schools["Harvard"] = 1] = "Harvard";
    Schools[Schools["Standford"] = 2] = "Standford";
    Schools[Schools["Berkely"] = 3] = "Berkely";
})(Schools || (Schools = {}));
console.log(Schools.Berkely);
// stirng enum
var Schoools;
(function (Schoools) {
    Schoools["Waterloo"] = "Waterloo";
    // Waterloo = 1,
    Schoools["Harvard"] = "Harvard";
    Schoools["Standford"] = "Standford";
    Schoools["Berkely"] = "Berkely";
})(Schoools || (Schoools = {}));
console.log(Schoools.Berkely);
// mixed enums
var Schooo0ls;
(function (Schooo0ls) {
    Schooo0ls[Schooo0ls["Waterloo"] = 1] = "Waterloo";
    Schooo0ls["Harvard"] = "Harvard";
    Schooo0ls[Schooo0ls["Standford"] = 2] = "Standford";
    Schooo0ls["Berkely"] = "Berkely";
    Schooo0ls[Schooo0ls["Berke2ly"] = 0] = "Berke2ly";
})(Schooo0ls || (Schooo0ls = {}));
console.log(Schooo0ls.Berkely, Schooo0ls.Standford);
console.log('Schooo0ls ------ ', Schooo0ls);
// output
//  Schooo0ls ------  {
//      '0': 'Berke2ly',
//      '1': 'Waterloo',
//      '2': 'Standford',
//      Waterloo: 1,
//      Harvard: 'Harvard',
//      Standford: 2,
//      Berkely: 'Berkely',
//      Berke2ly: 0
//      }
console.log(Schools[1]); // Harvard
console.log(1 /* constSchools.Waterloo */); // 1
