class Person1 {
    // properties
    name: string;
    age: number;

    // constructor
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age
    }

    // method
    sayHello(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
}

const A = new Person1('John8', 20)
const A1 = new Person1('John7', 21)
const A2 = new Person1('John6', 22)
const A3 = new Person1('John5', 23)
const A4 = new Person1('John4', 24)
const A5 = new Person1('John3', 25)
const A6 = new Person1('John2', 26)
const A7 = new Person1('John1', 27)


console.log(A.sayHello())
console.log(A1.sayHello())
console.log(A2.sayHello())
console.log(A3.sayHello())
console.log(A4.sayHello())
console.log(A5.sayHello())
console.log(A6.sayHello())
console.log(A7.sayHello())
