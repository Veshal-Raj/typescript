// functions
interface BinaryFn {
    (a: number, b: number) : number
}

const add: BinaryFn = (a, b) => a + b;
const sub: BinaryFn = (a, b) => a - b;
const mul: BinaryFn = (a, b) => a * b;
const div: BinaryFn = (a, b) => a / b;

// always give the return type of the function

const hello = (): void => console.log('hello')

const helloWorld = (): number => {
    return 10
}

// ===================================== //
const makeRasberrySmoothie = (
    rasberries: boolean,
    nutbutter: boolean
) : {  rasberries: boolean; nutbutter: boolean } => {
    const newSmoothie = {
        rasberries,
        nutbutter
    }
    return newSmoothie
} 

// default
const makeRasberrySmoothie1 = (
    rasberries: boolean,
    nutbutter: boolean = false
) : {  rasberries: boolean; nutbutter: boolean } => {
    const newSmoothie = {
        rasberries,
        nutbutter,
    }
    if (nutbutter) newSmoothie.nutbutter = nutbutter
    return newSmoothie
} 

makeRasberrySmoothie1(true)

// optional
const makeRasberrySmoothie2 = (
    rasberries: boolean,
    nutbutter?: boolean 
) : {  rasberries: boolean; nutbutter: boolean } => {
    const newSmoothie = {
        rasberries,
        nutbutter: false,
    }
    
    return newSmoothie
} 

makeRasberrySmoothie2(true)

// Rest parameters
const greet = (firstName: string, ...restOfNames: string[]) => {
    console.log(`Hello, my name is ${firstName}`)
    for (let name of restOfNames) {
        console.log(`${name}`)
    }
}

greet('veshal', 'raj','kkkkkk', 'ssssssss')

// overloading
function adding(a: number, b: number) : number
function adding(a: string, b: string) : string

function adding(a: any, b: any) {
    return a+b
}

console.log(adding(1,8))
console.log(adding('hello', ' world'))