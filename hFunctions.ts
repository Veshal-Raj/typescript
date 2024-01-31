function addTwo(num: number): number {
    return num + 2
}

addTwo(8)

function getUpper(val: string): string {
    return val.toUpperCase()
}

getUpper('hello')

function signupUser(name: string, email: string, isPaid: boolean) {}

signupUser('user','user@mail.com',true)

let loginUser = (name: string, email: string, isPaid: boolean=false) => {}

loginUser('user', 'user@mail.com')


// function getValue (myVal: number) {
//     if (myVal > 5) return true
//     return '200 OK'
// } 


const heros = ['thor', 'spiderman', 'ironman']
heros.map((hero):string => {
    return `hero is ${hero}`
})


function conosleError (errmsg:string): void {
    console.log(errmsg)
}

function handleError(errmsg: string): never {
    throw new Error(errmsg)
}

// the never type represents values which are never observed. In a return type, 
// this means that the function throws an exception or terminates execution of the program.
// never also appears when TypeScript determines there's nothing left in a union.

