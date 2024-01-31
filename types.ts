// implicit type checking
let isStudent = true;
// isStudent = 'false' --> type error

// explicit type checking
let isStudents: boolean = true;
// isStudents = 'false'  --> type error

// array
let friends: string[] = ["bob", "alice", "joe"];

let nameAgeSchool: [string, number, string];
nameAgeSchool = ["veshal", 13, "SVNS"];

let a: ["ab", 1];
// a = ['hello', 1 ]  --> this will throw error, this is expecting the same value inside the array

let b = ["abcd", 11];
b[1].toString();
console.log("b-------", b);

// any
let notSure: any = 8;
notSure = "a string instead";
notSure = true;

// void (similar to saying undefined)
const log = (): void => {
  console.log("hello world");
  // return 8
};

// null and undefined
let u: undefined = undefined;
let n: null = null;

let number : number = 3;
// number = null; // this will throw error, because in the tsconfig.json, we are given strictNullCheck true
// number = undefined; // this will throw error, because in the tsconfig.json, we are given strictNullCheck true

// enums
const foo = (school: number)=> {
    switch (school) {
        case 1: {
            // Waterloo
        }
        case 2: {
            // Harvard
        }
        default: {
            throw Error()
        }
    }
}

// Waterloo = 1, Harvard = 2, Standford = 3, Berkely = 4 

// using enum (numeric enum)
enum Schools {
    Waterloo,
    // Waterloo = 1,
    Harvard,
    Standford,
    Berkely
}

console.log(Schools.Berkely)

// stirng enum
enum Schoools {
    Waterloo = "Waterloo",
    // Waterloo = 1,
    Harvard = "Harvard",
    Standford = "Standford",
    Berkely = "Berkely"
}

console.log(Schoools.Berkely)

// mixed enums
enum Schooo0ls {
    Waterloo = 1,
    Harvard = "Harvard",
    Standford = 2,
    Berkely = "Berkely",
    Berke2ly = 0

}

console.log(Schooo0ls.Berkely, Schooo0ls.Standford)
console.log('Schooo0ls ------ ',Schooo0ls)
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

console.log(Schools[1]) // Harvard

// constant enums

const enum constSchools {
    Waterloo = 1,
    Harvard,
    Standford,
    Berkely,
}

console.log(constSchools.Waterloo) // 1
// console.log(constSchools[1]) // this will give you an error, constenums can only be accessed using string iterals
